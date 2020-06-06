import redux from 'redux';
const { compose } = redux;

const convertToUppercase = (str) => str.toUpperCase();
const repeat = (str) => str.repeat(2);
const addUnderscores = (str) => `_${str}_`;

const tranformString = compose(addUnderscores,convertToUppercase,repeat);

// compose combina las strings 
console.log(tranformString('Super Redux'));
