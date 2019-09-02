const realm = require('realm');
const model = require('./model.js');
const express = require('express')
const app = express()
const port = 3000

const currentVersion = Realm.schemaVersion('moze.realm');

app.get('/accounts', (req, res) => {
    realm.open({
        path: 'moze.realm',
        schema: [model.AHAccount, model.AHAccountGroup, model.AHCurrency],
        schemaVersion: currentVersion
    }).then(realm => {
        let accounts = realm.objects('AHAccount');

        res.send({ data: realmToJson(accounts) });

        realm.close();
    })
})

function realmToJson(realmObject) {
    return Array.from(realmObject);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

