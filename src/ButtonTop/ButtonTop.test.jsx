import { act, render } from "@testing-library/react";
import ButtonTop from "./ButtonTop";
describe("ButtonTop component", () => {
	let component = null;
	beforeEach(() => {
		act(() => {
			component = render(
				<div
					style={{
						height: "300vh",
					}}
				>
					<ButtonTop />
				</div>
			);
		});
	});
	it("should render conrrectly", async () => {
		expect(component).toBeTruthy();
		expect(component.asFragment()).toMatchSnapshot();
	});
});
