const { exec } = require('child_process');

const command = process.argv[2];

if (command === 'start') {
    console.log('Versionierung gestartet...');
    // Fügen Sie hier weitere Befehle zur Versionierung hinzu.
} else {
    console.log('Unbekannter Befehl:', command);
}