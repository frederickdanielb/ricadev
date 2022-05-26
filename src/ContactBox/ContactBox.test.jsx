import '@testing-library/jest-dom'
import { render, screen, userEvent } from './../../tests/utils/test-utils'
import { MockConfig } from "../../config/_mocks_/config";
import ContactBox from "./ContactBox";

describe("contact box component", () => {
	const propsWithData = MockConfig;
	let container = null;

	beforeEach(() => {
		container = render(<ContactBox config={propsWithData} />);
	});

	test("should render correctly", async () => {
		expect(container.asFragment()).toMatchSnapshot();
	});
	test("should show params", () => {
		const email = screen.getByText(/test@test.cl/)
		expect(email).toBeInTheDocument()
		const address = screen.getByText(/Av. Los Leones 1071/)
		expect(address).toBeInTheDocument()
		const phone = screen.getByText(/562 2 476 5800/)
		expect(phone).toBeInTheDocument()
	})
	describe("and when component not have config", () => {
		beforeEach(() => {

			let propsWithoutData = {...MockConfig};
			propsWithoutData.contact.address = null;
			propsWithoutData.contact.phone = null;
			propsWithoutData.contact.email = null;
			propsWithoutData.contact.social_networks = {};
			container = render(<ContactBox config={propsWithoutData} />);
		});
		test("should not render params not mapped", () => {
			expect(container.asFragment()).toMatchSnapshot();
		});
	});
});
