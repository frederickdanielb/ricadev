const PageContainer = ({ children }) => {
	return (
		<div className="container">
			<div className={"row"}>{children}</div>
		</div>
	);
};
export default PageContainer;
