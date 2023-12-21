import { render, screen } from "@testing-library/react"
import Card, { withPromotedLabel } from "../Card"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/cardMockData"

it("should render Card Component with data",()=>{
    render(<Card resData={MOCK_DATA}/>);
    const resName=screen.getByText("Gurukripa Restaurant - Sarwate");
    expect(resName).toBeInTheDocument();
});

it("should render Card Component with Prometed Label",()=>{
    const PromotedCard=withPromotedLabel(Card);
    render(<PromotedCard resData={MOCK_DATA}/>);
    const promotedLabel=screen.getByText("Veg");
    expect(promotedLabel).toBeInTheDocument();
});