const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: email,
        subject: 'Welcome to Task Manager!',
        text: `Welcome, ${name}! Thank you for joining Task Manager! We hope you enjoy the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: email,
        subject: 'We hope to see you again!',
        text: `We\'re sorry to see you go, ${name}! We hope you enjoyed using Task Manager.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}