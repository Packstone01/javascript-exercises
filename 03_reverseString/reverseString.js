const reverseString = function(str) {
  let split = str.split('');

  let reverse = split.reverse();

  let join = reverse.join('');

  return join;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
