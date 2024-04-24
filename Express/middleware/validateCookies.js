async function externallyValidateCookie(cookie) {
  return new Promise((resolve, reject) => {
 
    setTimeout(() => {
      if (cookie === 'validCookie') {
        resolve();
      } else {
        reject(new Error('Invalid cookie'));
      }
    }, 500);
  });
}


async function cookieValidator(cookies) {
  try {
    await externallyValidateCookie(cookies.testCookie);
  } catch (error) {
    throw new Error('Invalid cookies: ' + error.message);
  }
}

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

async function validateCookies(req, res, next) {
  try {
    await cookieValidator(req.cookies);
    next();
  } catch (error) {
    next(error); 
  }
}

app.use(cookieParser());
app.use(validateCookies);


app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

app.listen(3000);
