const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    // Extract the file extension from the file path
    const fileExtension = path.extname(filePath);

    // Check if the extracted extension matches the expected extension
    if (fileExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${fileExtension}`);
    }
}

// Test Cases
checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.png', '.jpg');