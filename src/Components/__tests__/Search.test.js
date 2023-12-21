import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/searchMockData"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should render 2 cards with search input ",async ()=>{
    await act(async()=>{render(
            <BrowserRouter>           
             <Body/>
            </BrowserRouter>

            );})
        const cardsBeforeClick=screen.getAllByTestId("resCard")

        expect(cardsBeforeClick.length).toBe(9);

        const searchBtn=screen.getByRole("button",{name:"Search"});

        const searchInputBox=screen.getByTestId("searchInput");

        fireEvent.change(searchInputBox,{target:{value:"Gurukripa"}});

        fireEvent.click(searchBtn)

        const cards=screen.getAllByTestId("resCard")

        expect(cards.length).toBe(2);
    
});


it("should render  cards with Top res btn ",async ()=>{
    await act(async()=>{render(
            <BrowserRouter>           
             <Body/>
            </BrowserRouter>

            );})
            const cardsBeforeClick=screen.getAllByTestId("resCard")

            expect(cardsBeforeClick.length).toBe(9);
            
            const topResBtn=screen.getByRole("button",{name:"Top Rated Restaurents"});
            fireEvent.click(topResBtn);
            const cards=screen.getAllByTestId("resCard")
            expect(cards.length).toBe(9);
    
});