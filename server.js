const express       = require('express');
const path          = require('path');
const app           = express();

const appRouting    = require('./approute');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/assets',express.static(path.join(__dirname, 'assets')));

app.use('/', appRouting);

app.listen(8080, ()=>{
    console.log('Application running in port : 8080');
});

module.exports=app;

// const express = require('express')
// const app = express()
// const port = 4444

// app.get('/', (req, res) => {
//   res.send('😅👆 <br> Klik disini untuk ke halaman profil <button style="background-color:black; border-radius:10px;"><a href="/profil" style="color:white; text-decoration:none;">Profil</a></button> <br><br> Klik disini untuk ke halaman contact <button style="background-color:black; border-radius:10px;"><a href="/contact" style="color:white; text-decoration:none;">Contact</a></button>')

// })

// app.get('/profil', (req, res) => {
//     res.send('Ini Adalah Halaman Profil! <br> Klik disini untuk ke halaman home <button style="background-color:black; border-radius:10px;"><a href="/" style="color:white; text-decoration:none;">Home</a></button>')
// })

// app.get('/contact', (req, res) => {
//     res.send('Ini Adalah Halaman contact! <br> Klik disini untuk ke halaman home <button style="background-color:black; border-radius:10px;"><a href="/" style="color:white; text-decoration:none;">Home</a></button>')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })