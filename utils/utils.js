import React from 'react';
import Error from 'next/error';

/**
 * GENERATE RANDOM STRING
 */
export const generateRandomString = (count = 5, prevValue) => {
  let value;
  do {
    value = Math.random()
      .toString(36)
      .substr(2, count);
  } while (value === prevValue);
  return value;
};

/**
 * THROW 404 ERROR TO DISPLAY ERROR PAGE
 */
export const throw404 = () => {
  if (process.browser) {
    return <Error statusCode={404} />;
  }
  const e = new Error();
  e.code = 'ENOENT';
  throw e;
};
