// Credit to https://stackoverflow.com/questions/43497373/access-process-env-in-environment-ts-file-created-from-the-angular-cli

const replace = require('replace-in-file')
const en = process.env

const options = {
    backurl: `http://localhost:${en.IRSJPY_SERVER_PORT}`,
    locurl: `http://localhost:${en.IRSJPY_LOCATION_PORT}`,
    portalurl: `http://localhost:${en.IRSJPY_PORTAL_PORT}`,
    appidClientID: en.APPID_CLIENT_ID,
    appidDiscoveryEndpoint: en.APPID_DISCOVERY_ENDPOINT
}


try {
    results = []
    for(const [key, value] of Object.entries(options)) {
        console.info(`/<${key}>/g`, value)
        const ex = new RegExp(`<${key}>`, 'g')
        let result = replace.sync({
            files: 'src/environments/*',
            from: ex,
            to: `'${value}'`,
        })
        results.push(result)
    }
    console.log("Replacement results: ", results)
} catch(err) {
    console.log("Error occured during replacement: ", err)
    throw err
}
