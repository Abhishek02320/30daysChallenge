const { exec } = require('child_process');

function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command Output:\n${stdout}`);
    });
}

// Test Cases:
executeCommand('dir');
executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');