
module.exports.add = (a, b) => a + b;

module.exports.square = (a) => a * a;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    },1000)
}

module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    },1000)
}


module.exports.validatePIN = (pin) => {
let result = pin.match(/^\d+$/);
if ((pin.length === 4 || pin.length === 6) && result) {
      return true
    }
    return false
  //  return (pin.length === 4 || pin.length === 6) && result;
    }


    module.exports.duplicateEncode = (word) =>{

        let arr3 = word.toLowerCase().split(/(?!$)/u);
        
        let newArray = '';
        
          for (let i = 0; i < arr3.length; ) 
          {
            for (let j = 0; j < arr3.length; j++) 
            {
              if ((arr3[i] === arr3[j]  ) && (j != i))
              {
                newArray = newArray + ')'
                j = arr3.length;
              }
            } 
            i++;
            if (newArray.length < i)
            {
                newArray = newArray + '('; 
            }
          }
          return newArray;
}
        