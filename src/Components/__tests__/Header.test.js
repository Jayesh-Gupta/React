import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import AppStore from "../../utilities/AppStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should load Header Component with Login Button",()=>{
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        
        );
        const loginButton=screen.getByRole("button",{name:"Login"});
        expect(loginButton).toBeInTheDocument();
});

it("should load  Header Component with cart items  0 ",()=>{
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        
        );
        const cartListItem=screen.getByRole("link",{name:"Cart-0"});
        expect(cartListItem).toBeInTheDocument();
});

it("should load  Header Component with cart",()=>{
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        
        );
        //passed regex
        const cartListItem=screen.getByText(/Cart/);
        expect(cartListItem).toBeInTheDocument();
});

it("should change Login Button to Logout Button onClick ",()=>{
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        
        );
        const loginButton=screen.getByRole("button",{name:"Login"});
        fireEvent.click(loginButton);
        const logoutButton=screen.getByRole("button",{name:"Logout"});
        expect(logoutButton).toBeInTheDocument();
});
