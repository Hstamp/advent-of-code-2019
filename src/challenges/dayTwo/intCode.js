
const intCode = (opcode) => {
  const finalOpcode = [...opcode];

  const findInputValues = (firstInput, secondInput) => (
    [finalOpcode[firstInput], finalOpcode[secondInput]]
  );

  const findOpcodeSum = (opcodeCommand, firstInput, secondInput) => {
    let sum;
    const [a, b] = findInputValues(firstInput, secondInput);
    switch (opcodeCommand) {
    case 1:
      sum = a + b;
      break;
    case 2:
      sum = a * b;
      break;
    default:
      break;
    }
    return sum;
  };

  for (let i = 0; i < opcode.length; i += 4) {
    const result = findOpcodeSum(finalOpcode[i], finalOpcode[i + 1], finalOpcode[i + 2]);
    if (!result) {
      break;
    }
    finalOpcode[finalOpcode[i + 3]] = result;
  }

  return finalOpcode;
};


module.exports = intCode;
