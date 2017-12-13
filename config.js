function config(fs) {
    return {
        url: 'https://binhcao.com',
        port: 7778,
        username: '',
        password: '',
        database: {
            host: '127.0.0.1',
            username: 'root',
            password: '1234',
            database: 'tn_hoctapaz',
            port: '3306',
        },
        allow_url: [
            'https://hoctapaz.dev',
            'https://binhcao.com',
            'https://firstcoinexchange.com',
            'https://thietkewebtn.com'
        ],
        ssl_options: {
            key: fs.readFileSync('./certificate/private.key'),
            cert: fs.readFileSync('./certificate/certificate.crt'),
            ca: fs.readFileSync('./certificate/ca_bundle.crt'),
            //requestCert: true
        }
    }
}
module.exports = config;