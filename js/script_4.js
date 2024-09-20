function check(a, x) {

   // define a flag variable to track if the value is found
   let found = false;

   // forEach elemnt in the array [a]
   a.forEach(e => {

      // check if the current element equals the given value x
      if (e === x) {

         // set found to true if a match is found 
         found = true;

      };

   });

   // return the result
   return found;

};

//* simpler version of the previous function *//

function containsValue(a, x) {

   // use the method includes() to check for the value in the given array
   return a.includes(x);

};