import { cleanup, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import history from "../../history";
import Step from "./Step";

describe("Step component", () => {
    let container = null;
	beforeEach(() => {
	    container= render(
			<Router history={history}>
				<Step current={3}>
					<Step.Item
						title={"Seleccionar"}
						linkeable
						path={"/hotels/search"}
					/>
					<Step.Item title={"Seleccionar2"} />
					<Step.Item title={"Seleccionar3"} />
					<Step.Item title={"Seleccionar4"} />
				</Step>
			</Router>
		);
	});
	afterEach(() => {
		cleanup();
	});
	it("renders correctly", () => {
		expect(container.asFragment()).toMatchSnapshot();
	});
});
