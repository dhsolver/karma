// @TODO replace console with other

const logger = {
  debug: process.env.DEBUG ? console.debug : () => {},
  error: console.error,
  log: console.log,
  warn: console.warn
};

export default logger;
