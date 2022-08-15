import { BlogContent, BlogDate, Box, Container, Image } from './styled';

const BoxBlog = ({image, date = new Date(), text, description, onClickReadMore}) => {

	const month = date.toLocaleString('default', { month: 'long' });

	return (
		<Container>
			<Box>
				<Image className="img-part">
					<div>
						<img
							src={image}
							className="img-fluid blur-up w-100 lazyloaded"
							alt=""
						/>
					</div>
					<BlogDate className="blog-date">
						<div>
							<h5>{date.getDate()}</h5>
							<h6>{month.slice(0,3)}</h6>
						</div>
					</BlogDate>
				</Image>
				<BlogContent className="blog-content">
					<div>
						<h5>{`${month} ${date.getDate()}, ${date.getFullYear()}`}</h5>
						<p>{text}</p>
						<h6>{description}</h6>
						<button onClick={onClickReadMore} className="btn btn-rounded btn-sm color1" tabIndex="0">
							Leer más
						</button>
					</div>
				</BlogContent>
			</Box>
		</Container>
	);
};

export default BoxBlog;
