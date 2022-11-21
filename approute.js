const router    = require('express').Router();
const mysql = require('mysql')

// KONEKSI DATABASE MYSQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'fariz',
  password: 'fariz',
  database: 'blogger_db'
})
// KONEKSI DATABASE MYSQL

// CEK KONEKSI
// connection.connect(function (error) {
//     if (error) throw error
//     else console.log("koneksi berhasil!!")
// })
// CEK KONEKSI

router.get('/', function (req, res) {
    // QUERY KE TBL BLOG
    connection.query('select * from tblblog', (err, rows, field) => {
        // if (err) throw err
        res.render('home', { fill: rows });
                // console.log(rows)
    });
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/about', function (req, res) {
    res.render('about');
});

module.exports = router;