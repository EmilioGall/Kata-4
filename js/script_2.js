function findShort(s) {

   // split the given string into an array of words [wordsArray]
   const wordsArray = s.split(' ');

   // define array with the first word inside [shortestWord]
   const shortestWord = [wordsArray[0]];

   // for each string in the array [wordsArray]
   wordsArray.forEach(e => {

      // if the length of the cycled element in [wordsArray] is shorter than the one in [shortestWord]
      if (e.length < shortestWord[0].length) {

         // substitute the shorter string
         shortestWord[0] = e;

      };

   });

   // return the length of the element in [shortestWord]
   return shortestWord[0].length;

}