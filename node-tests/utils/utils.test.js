const u_utils = require("./utils");
const expect = require("expect");

it("should add two numbers", () => {
  let res = u_utils.add(33, 11);

  expect(res)
    .toBe(44, `mar Expected 44. but got ${res}`)
    .toBeA("number", `${res} not a number`)
    .toBeLessThanOrEqualTo(44, `${res} is not less or equal to 44`);

  // if (res !== 44) {
  //     throw new Error(`Expected 44. but got ${res}`)
  // }
});

// Testing async functions
it('Testing AsyncAdd  of two numbers', (d) => {
    u_utils.asyncAdd(14, 3, (sum) => {
        expect(sum).toBe(17, `sum is ${sum}, but expected 17`).toBeA('number', 'typeOf is not a number');
        d();
    })
});

it('Testing square async', (done) => {
    u_utils.asyncSquare(5, (sqrt) => {
        expect(sqrt).toBe(25, `${sqrt}, not 25`).toBeA('number');
        done();
    })
})


it("should return square root of a number", () => {
  let res = u_utils.square(5);

  expect(res)
    .toBeLessThanOrEqualTo(25, `${res}  is not less or equal to 25`)
    .toBe(25, ` Square root of 5 is Expected to be 25. but got ${res}`);
});

it("should be Equal Objects", () => {
  //expect(12).toNotBe(12);
  expect({ name: "Marina" }).toEqual({ name: "Marina" });
});

it("Should include 3", () => {
  expect([1, 2, 3, 4, 5]).toInclude(3, `It should include Number 3`);
});

it("Shouldset First and Last Names", () => {
  expect({
    firstName: "Marina",
    lastName: "Ysn",
    age: 32
  })
    .toIncludeKey(["firstName"], "You didn't add First Name")
    .toIncludeKey(["lastName"], "Need Last Name as well");
});

// -- Test 1 --
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits
//If the function is passed a valid PIN string, return true, else return false.
it('ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits', () => {
    let p = u_utils.validatePIN('1234');

    expect(p).toBe(true, `mar Expected true. but got ${p}`)
})

// -- Test 2 --
// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples:
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

it('Convert a string to a new string where each character in the new string is \( or \)', () => {
  let p = u_utils.duplicateEncode('din');

  expect(p).toBe('(((', `Not correct: \n expects \'\(\(\(\', returns ${p}`)
})



