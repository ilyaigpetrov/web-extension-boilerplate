/* eslint-disable */ 
const Utils = {

  mandatory() {

    throw new TypeError('Missing required argument. ' +
      'Be explicit if you swallow errors.');

  },

  throwIfError(err) {

    if(err) {
      throw err;
    }

  },

  checkChromeError() {

    // Chrome API calls your cb in a context different from the point of API
    // method invokation.
    const err = chrome.runtime.lastError || chrome.extension.lastError;
    if (!err) {
      return;
    }
    console.warn('API returned error:', err);
    return new Error(err.message); // Add stack.

  },

  timeouted(cb = Utils.mandatory) {

    // setTimeout fixes error context, see bug #357568.
    return (...args) => setTimeout(() => cb(...args), 0);

  },

  chromified(cb = Utils.mandatory()) {

    // Take error first callback and convert it to chrome API callback.
    return function(...args) {

      const err = Utils.checkChromeError();
      Utils.timeouted(cb)(err, ...args);

    };

  },

  getOrDie(cb = Utils.mandatory()) {

    return Utils.chromified(function(err, ...args) {

      if (err) {
        throw err;
      }
      cb(...args);

    })

  },

  getProp(obj, path = Utils.mandatory()) {

    const props = path.split('.');
    if (!props.length) {
      throw new TypeError('Property must be supplied.');
    }
    const lastProp = props.pop();
    for( const prop of props ) {
      if (!(prop in obj)) {
        return undefined;
      }
      obj = obj[prop];
    }
    return obj[lastProp];

  },

  assert(value) {

    if(!value) {
      console.assert(value);
      throw new Error('Assert failed for:' + value);
    }

  },

};

export default Utils;
