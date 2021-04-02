const { codes } = require('./database');
const { respond } = require('./common');

export default async function (req, res)  {
  let nitro = req.originalUrl.replace('/insert/nitro', '').replace('/', '');
  if (!nitro) {
    return respond(res, 400, { error: 'Missing nitro code'});
  }

  if (/https:\/\/discord.gift/.test(nitro)) {
    nitro = nitro.replace('https://discord.gift/', '');
  }

  try {
    const result = await codes.asyncInsert({ nitro });
    console.log(result);
    return respond(res, 201, { message: 'Added successfully', ...result });
  } catch (error) {
    console.error(error.message);
    return respond(res, 403, { error: error.message });
  }
}
