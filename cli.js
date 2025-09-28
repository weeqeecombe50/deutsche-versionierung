const { exec } = require('child_process');

const command = process.argv[2];

if (command === 'start') {
    console.log('Versioning has started...');
    // Add more commands for versioning here.
} else {
    console.log('Unknown command:', command);
}