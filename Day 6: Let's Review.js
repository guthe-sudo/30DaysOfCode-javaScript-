function processData(input) {
      //Enter your code here
      message = input.split("\n");
      let n = parseInt(message[0])
  
      for(var x=0; x < n; x++){
          var m = message[x+1]
          var l = m.length;
              var arr = m.split('');
              var ra = "";
              var rb = "";
              
              for (var y = 0; y < l; y++)
                  {
                      if (y%2 == 0)
                          ra = ra + arr[y];
                      else
                          rb = rb + arr[y];
                  }
              console.log(ra + " " + rb);
              
      }
  }  
  