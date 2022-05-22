import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import AppContextProvider from "../../context/AppContext";
import history from "../../history";
import { mockHotels } from "../../tests/mocks/mocks";
import HotelCard from "./HotelCard";

describe("HotelCard component", () => {
	let container = null;
	const mockOnSelectHotel = vi.fn();
	beforeEach(async () => {
		await act(() => {
			container = render(
				<AppContextProvider>
					<Router history={history}>
						<HotelCard
							gridType={
								"col-xl-3 col-lg-4 col-sm-6 popular grid-item wow fadeInUp"
							}
							hotels={mockHotels}
							onSelectHotel={mockOnSelectHotel}
						/>
					</Router>
				</AppContextProvider>
			);
		}) 
	});
	it("should render the component", () => {
		expect(container.asFragment()).toMatchSnapshot();
		expect(screen.getByText(/Oasis Plan Europeo/)).toBeInTheDocument();
	});
});
