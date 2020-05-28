// std
import { deepStrictEqual } from 'assert';
import { readFileSync } from 'fs';
import { Server } from 'http';
import { join } from 'path';

// 3p
import { sign } from 'jsonwebtoken';
import * as superagent from 'superagent';
import * as request from 'supertest';

// FoalTS
import { Config, createApp, Get, HttpResponseOK } from '@foal/core';
import { getRSAPublicKeyFromJWKS } from '@foal/jwks-rsa';
import { JWTRequired } from '@foal/jwt';

describe('[Authentication|JWT|JWKS] Users can be authenticated with a JWKS retreived', () => {

  let server: Server;

  afterEach(() => {
    if (server) {
      server.close();
    }
  });

  it('from a local server.', async () => {
    // RSA keys taken from https://github.com/auth0/node-jsonwebtoken/tree/master/test
    const privateKey = readFileSync(join(__dirname, 'rsa-private.pem'), 'utf8');
    // const publicKey = readFileSync(join(__dirname, 'rsa-public-key.pem'), 'utf8');

    const jwks = {
      keys: [
        {
          alg: 'RS256',
          e: 'AQAB',
          kid: 'aaa',
          kty: 'RSA',
          n: 'vzoCEC2rpSpJQaWZbUmlsDNwp83Jr4fi6KmBWIwnj1MZ6CUQ7rBasuLI8AcfX5_10scSfQNCsTLV2t'
            + 'MKQaHuvyrVfwY0dINk-nkqB74QcT2oCCH9XduJjDuwWA4xLqAKuF96FsIes52opEM50W7_W7DZCKX'
            + 'kC8fFPFj6QF5ZzApDw2Qsu3yMRmr7_W9uWeaTwfPx24YdY7Ah-fdLy3KN40vXv9c4xiSafVvnx9Bw'
            + 'YL7H1Q8NiK9LGEN6-JSWfgckQCs6UUBOXSZdreNN9zbQCwyzee7bOJqXUDAuLcFARzPw1EsZAyjVt'
            + 'GCKIQ0_btqK-jFunT2NBC8RItanDZpptQ',
          use: 'sig',
        }
      ]
    };

    class AppController {

      @Get('/.well-known/jwks.json')
      getJWKS() {
        return new HttpResponseOK(jwks);
      }

      @Get('/api/users/me')
      @JWTRequired({
        secretOrPublicKey: getRSAPublicKeyFromJWKS({
          jwksUri: 'http://localhost:3000/.well-known/jwks.json'
        })
      })
      getUser() {
        return new HttpResponseOK({
          name: 'Alix'
        });
      }

    }

    server = createApp(AppController).listen(3000);

    try {
      const response = await superagent
        .get('http://localhost:3000/api/users/me')
        .set('Authorization', 'Bearer ' + sign({}, privateKey, { algorithm: 'RS256', header: { kid: 'aaa' } }));
      deepStrictEqual(response.body, {
        name: 'Alix'
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

  it('from Auth0.', () => {
    const domain = Config.get('auth0.domain', 'string');
    const audience = Config.get('auth0.audience', 'string');
    const token = Config.get('auth0.token', 'string');

    if (token === undefined) {
      console.warn('AUTH0_TOKEN not defined. Skipping this test...');
      return;
    }

    class AppController {

      @Get('/api/users/me')
      @JWTRequired({
        secretOrPublicKey: getRSAPublicKeyFromJWKS({
          cache: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `https://${domain}/.well-known/jwks.json`,
          rateLimit: true,
        })
      }, {
        algorithms: [ 'RS256' ],
        audience,
        issuer: `https://${domain}/`,
      })
      getUser() {
        return new HttpResponseOK({
          name: 'Alix'
        });
      }

    }

    const app = createApp(AppController);

    return request(app)
      .get('/api/users/me')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .then(response => {
        deepStrictEqual(response.body, {
          name: 'Alix'
        });
      });
  });

  it('from AWS Cognito.', async () => {
    const clientId = Config.get('cognito.clientId', 'string');
    const domain = Config.get('cognito.domain', 'string');
    const refreshToken = Config.get('cognito.refreshToken', 'string');
    let token: string;
    const region = Config.get('cognito.region', 'string');
    const userPoolId = Config.get('cognito.userPoolId', 'string');

    if (refreshToken === undefined) {
      console.warn('COGNITO_REFRESH_TOKEN not defined. Skipping this test...');
      return;
    }

    try {
      const { body } = await superagent
        .post(`https://${domain}.auth.${region}.amazoncognito.com/oauth2/token`)
        .send('grant_type=refresh_token')
        .send(`client_id=${clientId}`)
        .send(`refresh_token=${refreshToken}`);
      token = body.id_token;
    } catch (error) {
      throw new Error('Requesting a new access token failed.');
    }

    class AppController {

      @Get('/api/users/me')
      @JWTRequired({
        secretOrPublicKey: getRSAPublicKeyFromJWKS({
          cache: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`,
          rateLimit: true,
        })
      }, {
        algorithms: [ 'RS256' ],
        audience: clientId,
        issuer: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`,
      })
      getUser() {
        return new HttpResponseOK({
          name: 'Alix'
        });
      }

    }

    const app = createApp(AppController);

    return request(app)
      .get('/api/users/me')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .then(response => {
        deepStrictEqual(response.body, {
          name: 'Alix'
        });
      });
  });

});
