const express = require('express')
const QRCode = require('qrcode');
const PassThrough = require('stream').PassThrough;

const app = express();

app.use(express.static('assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/qrcode', async function(req, res){
    try {
        const url = req.query.url || 'https://heroku.com';
        //const qrCodeImage = await QRCode.toDataURL(url);
        const qrStream = new PassThrough();
        const qrCodeImage = await QRCode.toFileStream(qrStream, url, {
            type: 'png',
            width: 200,
            errorCorrectionLevel: 'H'
        })
        qrStream.pipe(res);
    } catch(err) {
        console.error(`Error generating QR code: ${err}`)
        res.status(500).send('Internal Server Error');
    }
});{}

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`👂 Server is listening on port ${port}`);
});