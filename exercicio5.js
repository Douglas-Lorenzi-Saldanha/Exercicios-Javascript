const file1 = "texto.txt";
const file2 = "texto.pdf";
const file3 = "texto.doc"


function getFileExtension(filename) {
    return filename.split('.').pop();
  }

  
  console.log(getFileExtension(file1));
  console.log(getFileExtension(file2));
  console.log(getFileExtension(file3));