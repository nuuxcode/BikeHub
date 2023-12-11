import { randomBytes, scrypt } from 'crypto';

const hash = (password:string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const salt = randomBytes(8).toString('hex');

    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ':' + derivedKey.toString('hex'));
    });
  });
};

const verify = (password: string, hash: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(':');
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key == derivedKey.toString('hex'));
    });
  });
};

export const AuthHelpers = {
  hash,
  verify,
};
