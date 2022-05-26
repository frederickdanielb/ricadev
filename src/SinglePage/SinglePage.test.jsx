import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SinglePage from "./SinglePage";
describe("Page Container component", () => {
	let component = null;
	beforeEach(() => {
		component = render(<SinglePage>Test</SinglePage>);
	});
	it("should render conrrectly", () => {
        expect(component).toBeTruthy()
        expect(component.asFragment()).toMatchSnapshot()
    });
	it("should render child", () => {
		expect(screen.getByText(/Test/)).toBeInTheDocument();
	});
});
