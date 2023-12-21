import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Menu from "../Menu"
import Header from "../Header"
import Cart from "../Cart"
import MOCK_DATA from "../mocks/menuMockData"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import AppStore from "../../utilities/AppStore"
import { BrowserRouter } from "react-router-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("should render Restaurent Menu Component",async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
            <Provider store={AppStore}> 
                    <Header/>    
                   <Menu/>
                   <Cart/>
            </Provider>
            </BrowserRouter>

        );
    });

    const accordianHeader=screen.getByText("Recommended(20)");
    expect(accordianHeader).toBeInTheDocument();
    fireEvent.click(accordianHeader);

    const addBtns=screen.getAllByRole("button",{name:"Add+"});
    expect(addBtns.length).toBe(20);

    fireEvent.click(addBtns[0])
    const cartItem1=screen.getByRole("link",{name:"Cart-1"});
    expect(cartItem1).toBeInTheDocument();

    fireEvent.click(addBtns[1])
    const cartItem2=screen.getByRole("link",{name:"Cart-2"});
    expect(cartItem2).toBeInTheDocument();

    fireEvent.click(cartItem2);
    const cartItemList=screen.getAllByTestId("itemList");
    expect(cartItemList.length).toBe(22);


})
