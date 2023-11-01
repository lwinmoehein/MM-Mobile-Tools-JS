import { describe,it } from "mocha"
import { expect } from "chai"
import { isValidPhone } from '../dist/index'

describe('MM Phone Validator Tests', () => {
  it('should return true for MPT operator check', () => {
    const result = isValidPhone("09440813572")
    expect(result).to.equal(true)
  });

it('should return false for MPT operator check', () => {
    const result = isValidPhone("09990813572")
    expect(result).to.equal(true)
  });

});
