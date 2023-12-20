import { Sum } from "../Sum"

test("Sum function should return the sum of two numbers",()=>{
    const result=Sum(2,3);
    //Assertion
    expect(result).toBe(5);
})