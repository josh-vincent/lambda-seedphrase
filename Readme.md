# Lambda Bip39 Seed phrase

Lambda function for generating a seed phrase using Bip39

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

bip39 package requried

```
npm install bip39
```

### Generate Seed phrase

```javascript
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
```
