import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "../../../Styles/AdminPanel/Carousel.module.css";

const CarouselComp = () => {
	return (
		<div className={classes.carousel}>
			<Carousel>
				<div>
					<img src="https://i.ytimg.com/vi/vJx6NEkEqB8/maxresdefault.jpg" />
				</div>
				<div>
					<img src="https://i.ytimg.com/vi/vJx6NEkEqB8/maxresdefault.jpg" />
				</div>
				<div>
					<img src="https://i.ytimg.com/vi/vJx6NEkEqB8/maxresdefault.jpg" />
				</div>
				<div>
					<img src="https://i.ytimg.com/vi/vJx6NEkEqB8/maxresdefault.jpg" />
				</div>
				<div>
					<img src="https://i.ytimg.com/vi/vJx6NEkEqB8/maxresdefault.jpg" />
				</div>
			</Carousel>
		</div>
	);
};

export default CarouselComp;
