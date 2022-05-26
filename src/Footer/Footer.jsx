import ContactUs from "./ContactUs";
import LeftLinks from "./LeftLinks";
import RightLinks from "./RightLinks";
import Sponsored from "./Sponsored";
import SubFooter from "./SubFooter";
import Topics from "./Topics";
import WhereWeAre from "./WhereWeAre";

const Footer = ({ config }) => {
	return (
		<footer>
			<div className="footer section-b-space section-t-space">
				<div className="container">
					<div className="row order-row">
						<ContactUs logoUrl={config.page.logo_url} contact={config.contact} />
						<LeftLinks links={config.page.footer.left_links} />
						<WhereWeAre />
						<RightLinks links={config.page.footer.right_links} />
						<Topics topics={config.page.footer.topics} />
						<Sponsored logos={config.page.footer.partners_logos}/>
					</div>
				</div>
			</div>
			<SubFooter />
		</footer>
	);
};
export default Footer;
