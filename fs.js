const fs = require('fs');

fs.writeFile('message.txt', 'Hello there node', (err) => {
    if (err) throw err;

    console.log('File has been written');
}); 