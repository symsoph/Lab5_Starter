// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// ALL TESTS PASS

// 2 tests return true - for 5 functions
test('Testing number string #a12027 as HexColor', () => {
  expect(isHexColor('#a12027')).toBe(true);
});

test('Testing number string #abc as HexColor', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('Testing number string a12027066 as password', () => {
  expect(isStrongPassword('a12027066')).toBe(true);
});

test('Testing number string a12b_ as password', () => {
  expect(isStrongPassword('a12b_')).toBe(true);
});

test('Testing number string 12/02/7066 as date', () => {
  expect(isDate('12/02/7066')).toBe(true);
});

test('Testing number string 12/2/7066 as date', () => {
  expect(isDate('12/2/7066')).toBe(true);
});

test('Testing number (120)270-6694 as phone num', () => {
  expect(isPhoneNumber('(120)270-6694')).toBe(true);
});

test('Testing number 120-270-6694 as phone num', () => {
  expect(isPhoneNumber('120-270-6694')).toBe(true);
});

test('Testing son001@ucsd.edu as email', () => {
  expect(isEmail('son001@ucsd.edu')).toBe(true);
});

test('Testing _@ucsd.edu as email', () => {
  expect(isEmail('_@ucsd.edu')).toBe(true);
});

// 2 test return false - for 5 functions
test('Testing number string a12027066 as HexColor', () => {
  expect(isHexColor('a12027066')).toBe(false);
});

test('Testing number string a12b_ as HexColor', () => {
  expect(isHexColor('a12b_')).toBe(false);
});

test('Testing number string 12 as password', () => {
  expect(isStrongPassword('12')).toBe(false);
});

test('Testing number string a as password', () => {
  expect(isStrongPassword('a')).toBe(false);
});

test('Testing number (120)270-6694 as date', () => {
  expect(isDate('(120)270-6694')).toBe(false);
});

test('Testing number 120-270-6694 as date', () => {
  expect(isDate('120-270-6694')).toBe(false);
});

test('Testing number 12 as phone num', () => {
  expect(isPhoneNumber(12)).toBe(false);
});

test('Testing number string 12 as phone num', () => {
  expect(isPhoneNumber('12')).toBe(false);
});

test('Testing number 12 as email', () => {
  expect(isEmail(12)).toBe(false);
});

test('Testing number string 12 as email', () => {
  expect(isEmail('12')).toBe(false);
});