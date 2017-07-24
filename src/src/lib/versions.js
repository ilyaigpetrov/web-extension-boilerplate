/*

# Documentation

1.  https://developer.chrome.com/extensions/manifest/version
2.  https://www.chromium.org/developers/version-numbers

**/
const max = 2 ** 16;
const versionToArray = (v) => [...v.split('.'), 0, 0, 0].slice(0, 4);
const versionToInteger = (v) => versionToArray(v)
  .reverse()
  .reduce((acc, vv, i) => acc + (parseInt(vv, 10) * (max ** i)), 0);

const currentVersion = chrome.runtime.getManifest().version;

const Versions = {

  current: currentVersion,
  currentBuild: versionToArray(currentVersion).slice(-2).join('.'),

  compare: (a, b) => versionToInteger(a) - versionToInteger(b),

};

export default Versions;
