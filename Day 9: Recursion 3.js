function readLine() {
      return inputString[currentLine++];
  }
  
  // Complete the factorial function below.
  function factorial(n) {
      if (n < 0) return;
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }