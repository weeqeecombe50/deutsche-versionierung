const { exec } = require('child_process');

const command = process.argv[2];

if (command === 'start') {
    console.log('Versioning has started...');
    // Add more commands for versioning here.
} else if (command === 'stop') {
    console.log('Versioning has stopped.');
} else if (command === 'help') {
    console.log('Available commands:');
    console.log('- start: Start versioning');
    console.log('- stop: Stop versioning');
    console.log('- help: Show this help message');
} else {
    console.log('Unknown command:', command);
}