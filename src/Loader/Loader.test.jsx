import { render, fireEvent, waitFor, screen, act } from "@testing-library/react";
import Loader from ".";
import AppContextProvider from "../../context/AppContext";
import useApp from "../../hooks/useApp";

describe("loader component", () => {
    let showLoading = true;
	let container = render(
		<AppContextProvider>
			<Loader loading={showLoading} useContext={false} />
		</AppContextProvider>
	);
    it("should render correctly", async () => {
        expect(container.asFragment()).toMatchSnapshot();
    })
    it("should not render", async () => {
        showLoading = false;
        expect(container.asFragment()).toMatchSnapshot();
    })
});
