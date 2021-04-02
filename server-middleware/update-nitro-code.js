const { codes } = require('./database');
const { respond } = require('./common');

export default async function (req, res)  {
  console.log('Update');
  let nitro = req.originalUrl.replace('/claim/nitro', '').replace('/', '');
  if (!nitro) {
    return respond(res, 400, { error: 'Missing nitro code'});
  }

  try {
    const result = await codes.asyncUpdate({ nitro }, { nitro, claimed: true });
    console.log(result);
    return respond(res, 201, { message: 'Updated successfully' });
  } catch (error) {
    console.error(error.message);
    return respond(res, 403, { error: error.message });
  }
}
