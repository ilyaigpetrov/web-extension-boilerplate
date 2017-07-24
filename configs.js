export default {
  // Error reporting url
  errorReportingUrl: // Template vars: {message}, {json}
    'https://github.com/homerjsimpson/foo-bar-extension/issues/new?title={message}'
      + '&body='
      + 'I want to report this error:\n```js\n{json}\n```\nIt happens when I:\n1. Do X\n2. Do Y',
};
