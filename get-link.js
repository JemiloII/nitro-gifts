const { codes } = require('./server-middleware/database');

function getNitro() {
  return codes.asyncFindOne({ claimed: false });
}

async function run () {
  const { _id } = await getNitro();
  const link = `https://nitro.shibiko.io/code/${_id}`;
  console.log(link);

  return link;
}

run();
