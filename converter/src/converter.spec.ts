import { expect, it, beforeEach } from "vitest";
import { Converter } from "./Converter";

let converter: Converter;

beforeEach(() => { converter = new Converter() })
/**
 * @class Converter
 *  @method toDecimal
 *  @method toOtherBases
 *  @method discoverBase
*/

/** 
 * @method toDecimal
 *  @param number 
 *  @param base  => numerical base of the number
 *  @returns number in the decimal base
*/
it("to decimal, result should be 4095", () => {
    expect(converter.toDecimal(2, '100000')).toEqual(32);
});

/** 
 * @method toOthersBases
 *  @param number 
 *  @param base  => numerical base of the number
 *  @returns number in @param base determined
*/
it("to binary, result should be: 100000", () => {
    expect(converter.toOthersBases(32, 2)).toEqual('100000');
});

it('to octal, result should be: 400', () => {
    expect(converter.toOthersBases(256, 8)).toEqual('400')
})

it('to hexa, result should be: CAFE', () => {
    expect(converter.toOthersBases(51966, 16)).toEqual('CAFE')
});

/** 
 * @method discoverBase
 *  @param number 
 *  @param base  => numerical base of the number
 *  @param expectedNumber
 *  @returns numerical base of the @param expectedNumber
*/
it('discover the numerical base, result should be: 8', () => {
    expect(converter.discoverBase('132', 8, '5A')).toEqual('16')
});