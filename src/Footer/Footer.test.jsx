import {
	render,
	fireEvent,
	waitFor,
	screen,
	act,
} from "@testing-library/react";
import { MockConfig } from "../../config/_mocks_/config";
import Footer from "./Footer";

describe("loader component", () => {
	let container = render(<Footer config={MockConfig}/>);
	it("should render correctly", async () => {
		expect(container.asFragment()).toMatchSnapshot();
	});
});
