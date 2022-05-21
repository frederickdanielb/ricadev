import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import history from "../../history";
import { NavLink } from "react-router-dom";
describe("ScrollToTop component", () => {
	const container = render(
		<Router history={history}>
            <NavLink to={"/home"} />
			<div onLoad={() => ScrollToTop()}>test</div>
		</Router>
	);
	it("should render correctly", () => {
		expect(container).toBeTruthy();
	});
});
