import { BlogContent, BlogDate, Box, Container, Image } from './styled';

const BoxBlog = () => {
	
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
