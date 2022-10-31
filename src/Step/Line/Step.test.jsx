import { cleanup, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import history from '../../history';
import StepLine from './StepLine';

describe('StepLine component', () => {
	let container = null;
	beforeEach(() => {
		container = render(
			<Router history={history}>
				<StepLine current={3}>
					<StepLine.Item title={'Seleccionar'} linkeable path={'/hotels/search'} />
					<StepLine.Item title={'Seleccionar2'} />
					<StepLine.Item title={'Seleccionar3'} />
					<StepLine.Item title={'Seleccionar4'} />
				</StepLine>
			</Router>,
		);
	});
	afterEach(() => {
		cleanup();
	});
	it('renders correctly', () => {
		expect(container.asFragment()).toMatchSnapshot();
	});
});
