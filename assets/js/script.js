const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "7204c68547fb46",
        Password: "c60fd8a73daa5b",
        To: "miguel.fernandes.idesign@gmail.com",
        From: inputs.elements["email"].value,
        Subject: "contact us",
        Body: inputs.elements["message"].value + "<br>" + inputs.elements["name"].value
    }).then(msg=>alert("email sent"))

})