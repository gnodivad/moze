const realm = require('realm');
const model = require('./model.js');

const currentVersion = Realm.schemaVersion('moze.realm');

realm.open({
    path: 'moze.realm',
    schema: [model.AHAccount, model.AHAccountGroup, model.AHCurrency],
    schemaVersion: currentVersion
}).then(realm => {
    let accounts = realm.objects('AHAccount');

    for (let p of accounts) {
        console.log(p.name);
    }

    realm.close();
})
