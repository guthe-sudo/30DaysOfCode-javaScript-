class Student extends Person {
      /*	
      *   Class Constructor
      *   
      *   @param firstName - A string denoting the Person's first name.
      *   @param lastName - A string denoting the Person's last name.
      *   @param id - An integer denoting the Person's ID number.
      *   @param scores - An array of integers denoting the Person's test scores.
      */
      // Write your constructor here
          constructor(firstName, lastName, idNumber, testScores) {
          super(firstName, lastName, idNumber);
          this.testScores = testScores;
      }
      /*	
      *   Method Name: calculate
      *   @return A character denoting the grade.
      */
      // Write your method here
          calculate() {
          let average = 0;
          let sum = 0;
          let grade = '';
          for (let i = 0, length = this.testScores.length; i < length; i++) {
              sum += this.testScores[i];
          }
          average = sum / this.testScores.length;
          if (90 <= average && average <= 100) {
              grade = 'O';
          } else if (80 <= average && average < 90) {
              grade = 'E';
          } else if (70 <= average && average < 80) {
              grade = 'A';
          } else if (55 <= average && average < 70) {
              grade = 'P';
          } else if (40 <= average && average < 55) {
              grade = 'D';
          } else {
              grade = 'T';
          }
          return grade;
      }
  }
  