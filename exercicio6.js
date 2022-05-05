function startWithjava(start){

  if (start.length < 4){
    return false;
  }

  begin = (start.substring(0, 4));

  if (begin == 'Java') {
    return true;
  }

  else {
    return false;
  }
}




console.log(startWithjava("JavaScript"));
console.log(startWithjava("C#"));