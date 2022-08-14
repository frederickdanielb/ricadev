import styled from 'styled-components';

const BoxBlog = () => {
	const Container = styled.div`
		width: 100%;
		display: inline-block;
	`;
	const Box = styled.div`
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		background-color: white;
		-webkit-box-shadow: 0px 0.66px 6px 0px #00000021;
		box-shadow: 0px 0.66px 6px 0px #00000021;
	`;
	const BlogDate = styled.div`
		padding: 10px 12px;
		background-color: ${(props) => props.theme.colors.primary};
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		position: absolute;
		top: 35px;
		left: 35px;
		-webkit-box-shadow: 2.5px 4.33px 25px 0px ${(props) => props.theme.colors.primary};
		box-shadow: 2.5px 4.33px 25px 0px ${(props) => props.theme.colors.primary};
		text-align: center;
		h5 {
			color: white;
			margin-bottom: 0;
			font-weight: 700;
		}
		h6 {
			font-size: 10px;
			color: white;
			text-transform: uppercase;
			margin-bottom: 0;
			font-weight: 700;
		}
	`;
	const Image = styled.div`
		position: relative;
		img {
			min-width: 300px;
		}
	`;

	const BlogContent = styled.div`
		padding: 30px;

		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		padding: 70px 55px;
		p {
			letter-spacing: 0.03em;
			line-height: 1.3;
			color: black;
			font-weight: 800;
			font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)));
		}
		h5 {
			letter-spacing: 0.03em;
			line-height: 1.2;
			font-size: 14px;
			color: ${(props) => props.theme.colors.primary};
			text-transform: capitalize;
			font-weight: 600;
			margin-bottom: 20px;
		}
		h6 {
			line-height: 1.2;
			letter-spacing: 0.03em;
			font-size: 14px;
			color: #999999;
			font-weight: 600;
			margin-bottom: 20px;
		}
	`;
	return (
		<Container>
			<Box>
				<Image className="img-part">
					<div>
						<img
							src="http://placekitten.com/300/370"
							className="img-fluid blur-up w-100 lazyloaded"
							alt=""
						/>
					</div>
					<BlogDate className="blog-date">
						<div>
							<h5>24</h5>
							<h6>feb</h6>
						</div>
					</BlogDate>
				</Image>
				<BlogContent className="blog-content">
					<div>
						<h5>january 9, 2019</h5>
						<p>Lorem Ipsum is simply the of the printing and dummy text of typesetting..</p>
						<h6>Lorem Ipsum is simply dummy since..</h6>
						<a href="blog-detail-video.html" className="btn btn-rounded btn-sm color1" tabIndex="0">
							read more
						</a>
					</div>
				</BlogContent>
			</Box>
		</Container>
	);
};

export default BoxBlog;
