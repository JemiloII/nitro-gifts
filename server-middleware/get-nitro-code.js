const { codes } = require('./database');
const { respond } = require('./common');

export default async function (req, res)  {
  const _id = req.originalUrl.replace('/nitro', '').replace('/', '');
  if (!_id) {
    return respond(res, 400, { error: 'Missing nitro code'});
  }

  const result = await codes.asyncFindOne({ _id });
  if (!result) {
    return respond(res, 403, { error: 'Invalid nitro code'});
  }

  return respond(res, 200, { ...result });
}
