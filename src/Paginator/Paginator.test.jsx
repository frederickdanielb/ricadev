import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Paginator from "./Paginator";

describe("Paginator component", () => {
    const onChange = vi.fn();
	it("should render correctly", async () => {
		const { asFragment } = render(<Paginator onChangePage={onChange}  activePage={0} limit={10} total={100}  />);

		/* act(() => {
			screen.getByText("weather");
		});
		await waitFor(() =>
			expect(screen.getAllByText(/9.7/)[0]).toBeInTheDocument()
		); */
		expect(asFragment()).toMatchSnapshot();

        act(() => {
            const nextButton = screen.getByText("Siguiente");
            fireEvent.click(nextButton);
        })
        act(() => {
            const lastButton = screen.getByText("Anterior");
            fireEvent.click(lastButton);
        })
        act(() => {
            const numberButton = screen.getByText("3");
            fireEvent.click(numberButton);
        })
        expect(onChange).toHaveBeenCalledTimes(3);
	});
});
