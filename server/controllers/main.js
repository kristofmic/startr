import conf from 'nconf';

import { handleNotFoundError } from './error';

import Main from '../../client/src/components/Main';
import { createStore } from '../../client/src/store';

import reactServer from '../lib/utils/reactServer';

import getAssets from '../../views/assets';

import HTTP_STATUS_CODES from '../constants/httpStatusCodes';

const PUBLIC_PATH = '/public';
const SERVER_RENDER = conf.get('serverRender');
const NODE_ENV = conf.get('NODE_ENV');
const CLIENT_ASSETS = getAssets();
const DEFAULT_LOCALS = {
  ...CLIENT_ASSETS,
  env: NODE_ENV,
  localData: {}
};

export function mainView(req, res, next) {
  if (req.path.indexOf(PUBLIC_PATH) === 0) {
    return handleNotFoundError(req, res, next);
  }

  const locals = { ...DEFAULT_LOCALS };

  if (SERVER_RENDER) {
    const context = {};
    locals.body = reactServer(Main, {
      context,
      location: req.originalUrl,
      store: createStore(),
    });

    if (context.url) {
      return res.redirect(HTTP_STATUS_CODES.FOUND, context.url);
    }
  }

  return res.status(HTTP_STATUS_CODES.OK).render('main.ejs', locals);
}
