export function invalidLink(res) {
  res.writeHead(301, { Location: '/invalid-link' });
  return res.end();
}

export function respond(res, statusCode = 200, payload = {}) {
  res.writeHead(statusCode, {
    'Content-Type': 'text/json'
  });

  return res.end(JSON.stringify(payload));
}
