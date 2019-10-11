const {findNextSquare} = require('./mainCode');

test("should return the next square for perfect squares", () => {
    const answer = findNextSquare(121);
    expect(answer).toBe(144);
})

test("should return -1 for numbers which aren't perfect squares", () => {
    const answer = findNextSquare(155);
    expect(answer).toBe(-1);
})

