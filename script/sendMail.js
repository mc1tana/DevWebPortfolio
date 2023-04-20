function sendEmail() {
    console.log("dsfihj")
    Email.send({
      Host: "smtp.laposte.net",
      port: 465,
    secure: false,
    auth: {
        "user": "michel-cardon@laposte.net",
        "pass": "Deardiaries1909+"
    },
      Username: "michel-cardon",
      Password: "Deardiaries1909+",
      To: 'michel-cardon@laposte.net',
      From: "michel-cardon@laposte.net",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      }).catch((e)=>{alert(e)});
  }
sendEmail()