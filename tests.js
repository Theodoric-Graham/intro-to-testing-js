// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when called with sayHello("Jane")', function () {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return "Hello, Alex!" when called with sayHello("Alex")', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!" when called with sayHello("Pat")', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return "Hello, World!" when called with sayHello()', function () {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when called with sayHello(true)', function () {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when called with sayHello(false)', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
})

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return with a boolean when passed a string', function () {
        expect(isFive('hello')).toBe(false);
    });
    it('should return with a boolean when passed an object', function () {
        expect(isFive([1, 2, 3])).toBe(false);
    });
    it('should return with a boolean when passed a boolean', function () {
        expect(isFive(true)).toBe(false);
    });
    it('should return with a boolean when passed a numeric string ', function () {
        expect(isFive('5')).toBe(true);
    });
    it('should return true when called with isFive(5)', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when called with isFive()', function () {
        expect(isFive()).toBe(false);
    });

})

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return false when isEven()', function () {
        expect(isEven()).toBe(false)
    });
    it('should return false when isEven([1, 2, 3])', function () {
        expect(isEven([1, 2, 3])).toBe(false)
    });
    it('should return false when isEven("banana")', function () {
        expect(isEven("string")).toBe(false)
    });
    it('should return true when isEven("8")', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return true when isEven(2)', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when isEven(-4)', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when isEven(3)', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when called with boolean isEven(true)', function () {
        expect(isEven(true)).toBe(false)
    });
})

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('should return false when isVowel()', function () {
        expect(isVowel()).toBe(false)
    });
    it('should return true when isVowel("a")', function () {
        expect(isVowel('a')).toBe(true)
    });
    it('should return true when isVowel("A")', function () {
        expect(isVowel('A')).toBe(true)
    });
    it('should return true when isVowel("y")', function () {
        expect(isVowel('y')).toBe(false)
    });
    it('should return true when isVowel(4)', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false when isVowel(true)', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should return false when isVowel("banana")', function () {
        expect(isVowel('banana')).toBe(false)
    });

})

describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function')
    });
    it('should return 5 when add(2,3)', function () {
        expect(add(2,3)).toBe(5)
    });
    it('should return -12 when add(-3, -9)', function () {
        expect(add(-3, -9)).toBe(-12)
    });
    it('should return 11 when add("5", 6)', function () {
        expect(add("5",6)).toBe(11)
    });
    it('should return 6 when add("-4", "10")', function () {
        expect(add("-4","10")).toBe(6)
    });
    it('should return "NaN" when add("banana", "split")', function () {
        expect(add("banana","split")).toBe("NaN")
    });
})