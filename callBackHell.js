'use strict;'
fs.readFile('file.txt', 'utf8', (err, fileData) => { //fs.readFile() takes in a callback funciton
  if (err) {
    console.error('Error reading file:', err);
  } else {
    processFileData(fileData, (processedData) => {  //processFileData() also takes in a callback function and is nested inside the fs.readFile() function
      http.post('http://example.com', processedData, (response) => { //http.post() is taking in 2 callback functions
        console.log('Data sent to server:', response);
      }, (error) => {
        console.error('Error sending data to server:', error);
      });
    });
  }
});
