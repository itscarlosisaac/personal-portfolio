const express = require('express')
const path = require('path')
const cors = require('cors')
const sgMail = require('@sendgrid/mail')
console.log("Process: ",process.env)
sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

const app = express();

const distPath = path.join(__dirname, '..', 'dist/');
const port = process.env.PORT || 3000;

app.use(express.static(distPath));
app.use(express.json())
app.use(cors())

app.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const message_to_send = {
      from: 'itscarlosisaac@gmail.com',
      to: 'itscarlosisaac@gmail.com',
      subject,
      html: `
        <div>
          <h3>Portfolio Contact from ${email}</h3>
          <p>
			         <strong>Name:</strong> ${name}
          <p>
            ${message}
          </p>
        </div>
      `,
    };
    // send email using sendgrid
    await sgMail.send(message_to_send);
    console.log("Message sent", req.body)
    res.status(200).send({ message: 'Email sent successfully' });
  }catch (e){
    console.log("Error: ", e)
    res.status(500).send({ message: 'Error sending email' });
  }
})

app.all('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
});


app.listen(port, () => {
  console.log("Server is up");
});