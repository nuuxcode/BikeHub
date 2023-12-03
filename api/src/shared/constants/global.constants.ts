//eslint-disable-next-line
require('dotenv').config();

export const JWT_SECRET = process.env.JWT_SIGNATURE;
export const JWT_EXPIRY_SECONDS = 3600;

export enum ROLES_ENUM {
  ADMIN = 'admin',
  USER = 'user',
}

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
};
export const DEFAULT_PAGE_LIMIT = 10;
export const MAX_PAGE_LIMIT = 100;

export const DEFAULT_SORT_BY = 'id';

export const API_PREFIX = '/api/v1';

//Regex
export const PHONE_REGEX = /^[0-9\s+-.()]+$/;

export const SLUG_SEPARATOR = '-';


if (process.env.NODE_ENV === 'prod') {
  process.env.BACKEND_URL = process.env.BACK_END_PROD;
  process.env.REDIRECT_URL = process.env.FRONT_END_PROD;
}
if (process.env.NODE_ENV === 'dev') {
  process.env.BACKEND_URL = process.env.BACK_END_DEV;
  process.env.REDIRECT_URL = process.env.FRONT_END_DEV;
}
if (process.env.NODE_ENV === 'local') {
  process.env.BACKEND_URL = process.env.BACK_END_LOCAL;
  process.env.REDIRECT_URL = process.env.FRONT_END_LOCAL;
}

if (process.env.DB_MODE === 'prod') {
  process.env.DATABASE_URL = process.env.DATABASE_URL_PROD;
}
if (process.env.DB_MODE === 'dev') {
  process.env.DATABASE_URL = process.env.DATABASE_URL_DEV;
}
if (process.env.DB_MODE === 'local') {
  process.env.DATABASE_URL = process.env.DATABASE_URL_LOCAL;
}
