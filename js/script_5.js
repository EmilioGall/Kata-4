function isPangram(string) {

   // create a Set to hold unique letters
   const letters = new Set();

   // normalize the string to lowercase and iterate over each element
   for (let elem of string.toLowerCase()) {

      // check if the element is a letter
      if (elem >= 'a' && elem <= 'z') {

         // add the letter to the Set
         letters.add(elem);

      };

   };

   // check if the Set contains all 26 letters of the english alphabet
   return letters.size === 26;

};