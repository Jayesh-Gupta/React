import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Test for Contact us Page",()=>{

    test("should load heading in Contact Component",()=>{

        render(<Contact/>);
    
        const heading=screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    it("should load submit button in Contact Component",()=>{
        render(<Contact/>);
        const submitButton=screen.getByText("Submit");
        expect(submitButton).toBeInTheDocument();
    });
    
    it("should load input box in Contact Component",()=>{
        render(<Contact/>);
        const inputBox=screen.getByPlaceholderText("name");
        expect(inputBox).toBeInTheDocument();
    });
    test("should load two input box in Contact Component",()=>{
        render(<Contact/>);
        //Querying
        const inputBoxes=screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });

})

