import React from 'react';
import ButtonTop from '../ButtonTop';
import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav/Nav';
import NavItem from '../Nav/NavItem/NavItem';
import SinglePage from '../SinglePage';
import Step from '../Step';
const mockConfig = {
	page: {
		logo_url: 'https://www.panamericanaturismo.cl/_ns_img/logo/logoPanamericana200x70.png',
		footer: {
			partners_logos: [
				'https://www.panamericanaturismo.cl/_ns_img/footer/logo-web-pay-plus.png',
				'https://www.panamericanaturismo.cl/_ns_img/footer/logo-iata-achet.png',
				'https://www.tsyacom.cl/images/logo.png',
			],
			left_links: {
				title: 'Destinos',
				links: [
					{
						name: 'Caribe',
						url: 'https://www.panamericanaturismo.cl/Destinos/?/Zona/3/Caribe',
					},
					{
						name: 'Centro América',
						url: 'https://www.panamericanaturismo.cl/Destinos/?/Zona/9/Centro-America',
					},
					{
						name: 'Sudamérica',
						url: 'https://www.panamericanaturismo.cl/Destinos/?/Zona/2/Sudamerica',
					},
					{
						name: 'Chile',
						url: 'https://www.panamericanaturismo.cl/Destinos/?/Zona/10/Chile',
					},
					{
						name: 'Europa',
						url: 'https://www.panamericanaturismo.cl/Destinos/?/Zona/13/Europa',
					},
					{
						name: 'Destinos Lejanos',
						url: 'https://www.panamericanaturismo.cl/Destinos/?/Zona/19/Destinos-Lejanos',
					},
					{
						name: 'Norteamérica',
						url: 'https://www.panamericanaturismo.cl/Destinos/?/Zona/1/USA',
					},
				],
			},
			right_links: {
				title: 'Sobre nosotros',
				links: [
					{
						name: 'Cotiza tu viaje',
						url: 'https://www.panamericanaturismo.cl/Cotiza-Tu-Viaje',
					},
					{
						name: 'Agente especial',
						url: 'https://www.panamericanaturismo.cl/Agente-Especial',
					},
					{
						name: 'Políticas de Privacidad',
						url: 'https://www.panamericanaturismo.cl/Politicas-y-Condiciones/Politicas-de-Privacidad/',
					},
					{
						name: 'Condiciones y Términos de Uso',
						url: '',
					},
					{
						name: 'Política sobre la explotación sexual',
						url: 'https://www.panamericanaturismo.cl/_pdf/20170731_Politica_explotacion_sexual_en_turismo.pdf',
					},
				],
			},
		},
	},
	contact: {
		company_name: 'Panamericana Turismo',
		address: 'Av. Los Leones 1071',
		map_url:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.768936005934!2d-70.60544108480117!3d-33.42926798078003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf72251d4829%3A0xe2cfa9b2f844f83c!2sAv.%20Los%20Leones%201071%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1647817812809!5m2!1ses-419!2scl',
		phone: '+562 2 476 5800',
		email: '',
		social_networks: {
			facebook: 'https://www.facebook.com/TurismoPanamericana/',
			youtube: 'https://www.youtube.com/channel/UCGiVnhb-GDcDujk1K8PC_8g',
		},
	},
};
const BasePage2 = ({ children }) => {
	return <SinglePage>{children}</SinglePage>;
};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Base/Page2',
	component: BasePage2,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	/*  argTypes: {
    backgroundColor: { control: "color" },
  }, */
  subcomponents: { Nav, NavItem, Step, Footer}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BasePage2 {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	children: (
		<>
			<Nav
				logo={mockConfig.page.logo_url}
				userDisplayName={'Test User'}
				isLoggedIn
				menuItems={[
					{ node: 'Home', onClick: () => console.log('home clicked') },
					{ node: 'About', onClick: () => console.log('about clicked') },
					{ node: 'Contact', onClick: () => console.log('contact clicked') },
				]}
			>
				<NavItem>{"Home"}</NavItem>
				<NavItem>{"About"}</NavItem>
				<NavItem>{"Contact"}</NavItem>
			</Nav>
			<SinglePage>
				<Step linkeable current={1}>
					<Step.Item title={"data item"} />
					<Step.Item title={"data item2"} />
					<Step.Item title={"data item3"} />
					<Step.Item title={"data item4"} />
				</Step>
			</SinglePage>
			<Footer config={mockConfig} />
		</>
	),
};
