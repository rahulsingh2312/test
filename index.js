const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'registerformdb',
   port: 3306
})
db.connect((err) => {
   if (err) {
      console.warn("error")
   }
   else {
      console.warn("database connected")
   }
})

// const upload = multer({
//    storage: multer.diskStorage({
//        destination: function (req, file, cb) {
//            cb(null, 'backend-nodejs')
//        },
//        filename: function (req, file, cb) {
//            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//        }
//    })
// }).single('user_file');

app.post('/upload', upload.single('fileUpload'), (req, res) => {
   const file = req.file; // Uploaded file
   const filePath = file.path; // File path on the server
 
   // Save filePath or other file details to your database
   const sql = `INSERT INTO files (filePath) VALUES (?)`;
   db.query(sql, [filePath], (err, result) => {
     if (err) {
       console.error('Error inserting file into database:', err);
       res.status(500).json({ error: 'Internal server error' });
     } else {
       console.log('File inserted into database successfully');
       res.status(200).json({ message: 'File uploaded successfully' });
     }
   });
 });

//get all data
app.get('/user', (req, resp) => {

   let qr = `select * from user`;
   db.query(qr, (err, result) => {
      if (err) {
         console.log(err, 'errs');
      }
      if (result.length > 0) {
         resp.send({
            message: 'all users data',
            data: result
         });
      }
   });
   //console.log('get users')
});

//get single data

app.get('/user/:id', (req, resp) => {
   let getID = req.params.id;
   let qr = `select * from user where id= ${getID}`;
   db.query(qr, (err, result) => {
      if (err) { console.log(err); }
      if (result.length > 0) {
         resp.send({
            message: 'all users data',
            data: result
         });
      }
      else {
         resp.send({
            message: "data not found"
         });
      }
      //console.log('get single data');
      //console.log(req.params.id,'get id of=>')
   });
});

// post / insert data
app.post('/user', (req, resp) => {
   let firstName = req.body.basic.firstName;
   let lastName = req.body.basic.lastName;
   let phoneNumber = req.body.contact.phoneNumber;
   let email = req.body.contact.email;
   let street = req.body.address.street;
   let city = req.body.address.city;
   let pincode = req.body.address.pincode;
   let fileUpload = req.body.additionalInfo.fileUpload;

   let qr = `INSERT INTO user (firstName,lastName,phoneNumber,email, street, city, pincode, fileUpload) 
             VALUES ('${firstName}', '${lastName}', '${phoneNumber}', '${email}',  '${street}', '${city}', '${pincode}', '${fileUpload}')`;
   
   db.query(qr, (err, result) => {
      if (err) { 
         console.log(err);
         resp.status(500).send({ message: 'Error inserting data' });
      } else {
         console.log(result, 'result');
         resp.send({ message: 'Data inserted successfully' });
      }
   });
   console.log(req.body, 'insertdata');
});

// update data
app.put('/user/:id', (req, resp) => {
   let getID = req.params.id;
   let firstName = req.body.firstName;
   let lastName = req.body.lastName;
   let phoneNumber = req.body.phoneNumber;
   let email = req.body.email;
   let street = req.body.street;
   let city = req.body.city;
   let pincode = req.body.pincode;
   let fileUpload = req.body.fileUpload;

   let qr = `UPDATE user 
             SET firstName='${firstName}', lastName='${lastName}', phoneNumber='${phoneNumber}', email='${email}',
                 street='${street}', city='${city}', pincode='${pincode}', fileUpload='${fileUpload}' 
             WHERE id=${getID}`;
    
   db.query(qr, (err, result) => {
      if (err) { 
         console.log(err);
         resp.status(500).send({ message: 'Error updating data' });
      } else {
         resp.send({ message: 'Data updated successfully' });
      }
   });
});


//delete single data
app.delete('/user/:id', (req, resp) => {
   let getID = req.params.id;
   let qr = `delete from user where id='${getID}'`;
    
   db.query(qr, (err, result) => {
      if (err) { console.log(err); }
      resp.send({
         message: 'data deleted',
      });
   });
   // console.log(req.body,'deletedata')
})

app.listen(3000, () => {
   console.log('server running... ');
})

