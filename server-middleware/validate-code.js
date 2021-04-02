const { codes } = require('./database');
const { invalidLink } = require('./common');

export default async function (req, res, next)  {
  const _id = req.originalUrl.replace('/code', '').replace('/', '');
  if (!_id) {
    return invalidLink(res);
  }

  const result = await codes.asyncFindOne({ _id });
  if (!result) {
    return invalidLink(res);
  }

  return next();
}
