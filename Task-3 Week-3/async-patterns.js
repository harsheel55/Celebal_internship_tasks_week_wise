const fs = require('fs').promises; 
const util = require('util');

function readFileCallback(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (err) {
    throw err;
  }
}

function demoCallback() {
  readFileCallback('example.txt', (err, data) => {
    if (err) {
      console.error('Callback Error:', err);
      return;
    }
    console.log('Callback Data:', data);
  });
}

function demoPromise() {
  readFilePromise('example.txt')
    .then(data => console.log('Promise Data:', data))
    .catch(err => console.error('Promise Error:', err));
}

async function demoAsync() {
  try {
    const data = await readFileAsync('example.txt');
    console.log('Async/Await Data:', data);
  } catch (err) {
    console.error('Async/Await Error:', err);
  }
}

// Run all demos
demoCallback();
demoPromise();
demoAsync();