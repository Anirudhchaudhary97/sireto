
import sum from './sum';
test("testing for sum function", () => {
    let a=10;
    let b=10;
    let result=20
    expect(sum(a,b)).toBe(result); // Corrected expected value
});


