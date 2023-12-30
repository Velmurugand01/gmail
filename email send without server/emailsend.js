var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'v4416143@gmail.com',
      pass: 'uiof rxyb tkrr qser'
    }
  });
  
  var mailOptions = {
    from: 'v4416143@gmail.com',
    to: 'velmurugand309@gmail.com',
    subject: 'Sending Email using Node.js',
    text:'email send scuccess'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 