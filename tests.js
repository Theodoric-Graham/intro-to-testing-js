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
    it('should return false when isEven("banana")', function() {
        expect(isEven("string")).toBe(false)
    });
    it('should return true when isEven("8")', function() {
        expect(isEven("8")).toBe(true)
    });
    it('should return true when isEven(2)', function() {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when isEven(-4)', function() {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when isEven(3)', function() {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when isEven(Infinity)', function() {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when called with boolean isEven(true)', function() {
        expect(isEven(true)).toBe(false)
    });
})