function spinWords(string) {

   // split the string into an array of words
   let words = string.split(' ');

   // use map to process each word
   let modifiedWords = words.map(e => {

      // check if the word has five or more letters
      if (e.length >= 5) {

         // reverse the word
         return e.split('').reverse().join('');

      }

      // return the word unchanged if it's less than five letters
      return e;

   });

   // join the modified words back into a single string
   return modifiedWords.join(' ');

}