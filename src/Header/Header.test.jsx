import {
	render,
	fireEvent,
	waitFor,
	screen,
	act,
} from "@testing-library/react";
import "@testing-library/jest-dom"
import { MockConfig } from "../../config/_mocks_/config";

import Header from "./Header";
import history from "../../history";
import { Router } from "react-router-dom";

describe("Header component", () => {
	const propsWithData = MockConfig;
	let container = null;

	beforeEach(() => {
		container = render(<Router history={history}><Header sessionUser={{name: "Test User"}} config={propsWithData} /></Router>);
	});

	it("should render correctly", async () => {
		expect(container.asFragment()).toMatchSnapshot();
	});
	it("should show params", () => {
		const username = screen.getByText(/Test User/)
		expect(username).toBeInTheDocument()
	})
	describe("and when component not have config", () => {
		beforeEach(() => {

			let propsWithoutData = {...MockConfig};
			container = render(<Router history={history}><Header sessionUser={null} config={propsWithoutData} /></Router>);
		});
		it("should not render params not mapped", () => {
			expect(container.asFragment()).toMatchSnapshot();
		});
	});
});
