var exports = module.exports = {};

const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport
({
	service: 'gmail',
	auth: 
	{
		user: 'olimijada.summanus@gmail.com',
		pass: 'nikola1997'
	}
});

exports.sendMail = function(email, sub, poruka)
{
	let mailOptions = 
	{
		from: 'olimijada.summanus@gmail.com',
		to: email,
		subject: sub,
		text: poruka
	};

	transporter.sendMail(mailOptions);
}