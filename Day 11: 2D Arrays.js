function main() {
      let arr = Array(6);
  
      for (let i = 0; i < 6; i++) {
          arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
      }
  
      const temp = []
      for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
              temp.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
          }
      }
      
      let max = temp.reduce(function (previous, current) {
          return previous > current ? previous : current;
      });
      
      console.log(max);
  }