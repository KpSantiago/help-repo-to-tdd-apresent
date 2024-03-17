export class Converter {
    public toDecimal(base: number, number: string | number) {
        let num = number.toString().split('').reverse();
        let decimalNumber: number = 0;
        let hexLetters: { [key: string]: string } = {
            'A': '10',
            'a': '10',
            'B': '11',
            'b': '11',
            'C': '12',
            'c': '12',
            'D': '13',
            'd': '13',
            'E': '14',
            'e': '14',
            'F': '15',
            'f': '15',
        }

        for (let i = 0; i < num.length; i++) {
            decimalNumber += Number(num[i]) || Number(hexLetters[num[i]]) * base ** i
        }
        return decimalNumber;
    }

    toOthersBases(number: number, base: number) {
        let num = number;
        let numArr = [];
        let hexLetters: { [key: number]: string } = {
            10: 'A',
            11: 'B',
            12: 'C',
            13: 'D',
            14: 'E',
            15: 'F',
        }
        for (let i = 1; i <= number; i++) {
            if (num >= base) {
                numArr.push(num % base);
                num /= base;
            }
        }

        if (num < base) numArr.push(num);

        numArr = numArr.map(n => parseInt(n.toString()));
        numArr.forEach((n: number, i: number) => n > 9 ? numArr[i] = hexLetters[n] : null);
        return numArr.reverse().toString().replaceAll(',', '');
    }

    public discoverBase(number: string | number, baseOfNumber: number, expectedNumber: number | string) {
        let num = number.toString().split("").reverse();
        let expctNumber = expectedNumber.toString().split("").reverse();
        let newNumber: number = 0, base: number = 0;
        let decimalNumber: number = 0;


        let hexLetters2: { [key: string]: number } = {
            'A': 10,
            'a': 10,
            'B': 11,
            'b': 11,
            'C': 12,
            'c': 12,
            'D': 13,
            'd': 13,
            'E': 14,
            'e': 14,
            'F': 15,
            'f': 15,
        }

        for (let i = 0; i < num.length; i++) {
            decimalNumber += !Number(num[i]) ? hexLetters2[num[i]] * baseOfNumber ** i : Number(num[i]) * baseOfNumber ** i;
        }
        for (; newNumber != decimalNumber; base++) {
            for (let i = 0; i < expctNumber.length; i++) {
                newNumber += !Number(expctNumber[i]) ? hexLetters2[expctNumber[i]] * base ** i : Number(expctNumber[i]) * base ** i

                if (newNumber == decimalNumber) break;
            }
            if (newNumber == decimalNumber) break;
            newNumber = 0;
        }

        return base.toString();
    }
} 