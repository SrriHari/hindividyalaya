function es() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "srrihari.ramkumar55@gmail.com",
        Password : "70D7DD2167429B999F7E1C00D1A0F5DE77AB",
        To : 'srriharitr@gmail.com',
        From : "srrihari.ramkumar55@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}