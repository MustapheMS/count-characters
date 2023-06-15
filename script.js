// Good Luck 💪🏾

//Done 💯💯😎😎


function count(num, string) 
{
    let count = 0
    for (let m = 0; m < string.length; m++) 
    {
      if (string[m] == num) 
      {
        count++;
      }
    }
    return count;
  }
let leter = "c"
let sentence = "fikrcamp coding Bootcamp"
let result = count(leter, sentence)
    console.log(result)
