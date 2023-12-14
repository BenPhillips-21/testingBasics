const myModules = require("./testing.cjs");

test("capitalize function capitalizes the first letter", () => {
  const result = myModules.capitalize("bello");
  expect(result).toBe("Bello");
});

test("capitalize function returns an empty string when given an empty string as input", () => {
  const result = myModules.capitalize("");
  expect(result).toBe("");
});

test("reverse string successfully reverses a given string", () => {
    const result = myModules.reverseString("hombre")
    expect(result).toBe("erbmoh")
})

test('calculator successfully calculates!!', () => {
    const calculator = myModules.calculator()
    let addResult = calculator.add(2,3)
    expect(addResult).toBe(5)
    let subResult = calculator.subtract(10, 5)
    expect(subResult).toBe(5)
    let multiplyResult = calculator.multiply(5, 5)
    expect(multiplyResult).toBe(25)
    let divideResult = calculator.divide(100, 5)
    expect(divideResult).toBe(20)
})

test('Caesar cipher correctly encrypts string', () => {
    let result = myModules.caesarCipher('Ronald', 4)
    expect(result).toBe('Vsreph')
})

test('Analyze array returns correct average, minimum, maximum and length', () => {
    let result = myModules.analyzeArray([1, 4, 7, 9 , 21])
    expect(result.min).toBe(1)
    expect(result.max).toBe(21)
    expect(result.length).toBe(5)
    expect(result.average).toBe(8.4)
})

