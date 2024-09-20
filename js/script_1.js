// define Alice and Bob's array of scores in three categories
const aScores = [20, 32, 18];
const bScores = [48, 25, 40];

function solve(aScores, bScores) {

   // define Alice and Bob's poits counters
   let aPoints = 0;
   let bPoints = 0;

   // compare scores arrays and increment the points counter of one of the partecipants only if the score assigned is bigger
   for (let i = 0; i < aScores.length; i++) {
      if (aScores[i] > bScores[i]) {
         aPoints++;
      } else if (bScores[i] > aScores[i]) {
         bPoints++;
      };
   };

   // determine the result message depending on the winner
   let resultMessage;

   if (aPoints > bPoints) {
      resultMessage = 'Alice made "Kurt" proud!';
   } else if (bPoints > aPoints) {
      resultMessage = 'Bob made "Jeff" proud!';
   } else if (bPoints === aPoints) {
      resultMessage = 'that looks like a "draw"! Rock on!';
   };

   // format and return the output
   return `${aPoints}, ${bPoints}: ${resultMessage}`;

};