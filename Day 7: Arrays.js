function main() {
      const n = parseInt(readLine(), 10);
  
      const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  
      const reverseArr = (array) => {
          let temp = 0;
          const length = array.length;
          
          for (let i = 0; i < length / 2; i++){
              temp = array[i];
              array[i] = array[length - 1 - i];
              array[length - 1 - i] = temp;
          }
  
          return array;
      }
      console.log(reverseArr(arr).join(' '));
  }