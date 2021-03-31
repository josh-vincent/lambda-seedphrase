const bip39 = require("bip39");

exports.handler = async (event) => {
  return generateMnemonic.promise();
};

function generateMnemonic() {
  let mnemonic;
  let attempt = 0;
  do {
    attempt = attempt + 1;
    mnemonic = bip39.generateMnemonic();
    console.log(`${attempt} attempt trying menomic`, mnemonic);
  } while (bip39.validateMnemonic(mnemonic) === false);
  return mnemonic;
}
