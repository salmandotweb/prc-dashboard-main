import React, { useState } from "react";
import classes from "../../Styles/AdminPanel/SingleProperty.module.css";
import SectionTitle from "../../Components/SectionTitle";
import { GoLocation } from "react-icons/go";
import Carousel from "../../Components/AdminPanel/Properties/Carousel";
import { BiBed } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import { BsMap } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useSinglePropertyMutation } from "../../services/userAuthApi";
import { getToken } from "../../services/LocalStorageService";
import { useEffect } from "react";

const SingleProperty = () => {
	const [propertyDetails, setPropertyDetails] = useState({});
	const [features, setFeatures] = useState([]);
	const [images, setImages] = useState([]);
	const token = getToken();
	const { id } = useParams();

	console.log(propertyDetails, features);

	const [singleProperty] = useSinglePropertyMutation();

	const fetchSingleProperty = async () => {
		const response = await singleProperty({
			id: id,
			token: token,
		});
		setPropertyDetails(response.data.property);
		setFeatures(response.data.property.Features);
		setImages(response.data.property.images);
		console.log(response);
	};

	useEffect(() => {
		fetchSingleProperty();
	}, []);

	return (
		<div className={`section ${classes.singlePropertyWrapper}`}>
			<SectionTitle section="Properties" subject="View Property" />

			<div className={classes.singlePropertyContainer}>
				<div className={classes.singleProperty}>
					<div className={classes.title}>
						<h4>{propertyDetails?.title}</h4>
						<p>
							PCM
							<span>£{propertyDetails?.price}</span>
						</p>
					</div>
					<div className={classes.location}>
						<p>
							<GoLocation /> {propertyDetails?.street}, {propertyDetails?.city},
							UK
						</p>
						<p>£311/P/W</p>
					</div>

					<div className={classes.propertyDetailsContainer}>
						<Carousel />
						<div className={classes.propertyDetails}>
							<div className={classes.overview}>
								<h4>Overview</h4>
								<h4>
									Property ID
									<span>{propertyDetails?.id}</span>
								</h4>
							</div>
							<div className={classes.flatDetails}>
								<div className={classes.flatType}>
									<p>Property Type</p>
									<h4>{propertyDetails?.property_type}</h4>
								</div>
								<div className={classes.flatType}>
									<p>Bedroom</p>
									<h4>
										<BiBed className={classes.icon} />{" "}
										<span>{propertyDetails?.bedrooms}</span>
									</h4>
								</div>
								<div className={classes.flatType}>
									<p>Bathroom</p>
									<h4>
										<GiBathtub className={classes.icon} />{" "}
										<span>{propertyDetails?.bathrooms}</span>
									</h4>
								</div>
							</div>
							<div className={classes.description}>
								<h4>Description</h4>
								<p>{propertyDetails?.description}</p>
							</div>
							<div className={classes.address}>
								<h4>Address</h4>
								<button className={`btn ${classes.addressBtn}`}>
									<BsMap className={classes.mapIcon} /> Open Google Maps
								</button>
							</div>
							<div className={classes.flatDetails}>
								<div className={classes.flatType}>
									<p>Street</p>
									<h4>{propertyDetails?.street}</h4>
								</div>
								<div className={classes.flatType}>
									<p>City</p>
									<h4>{propertyDetails?.city}</h4>
								</div>
								<div className={classes.flatType}>
									<p>Postal Code</p>
									<h4>{propertyDetails?.postal_code}</h4>
								</div>
							</div>
							{features.length > 0 && (
								<div className={classes.propertyFeatures}>
									<div className="title">
										<h3>Property Features</h3>
									</div>
									<div className={classes.featuresContainer}>
										{features.map(({ title }) => {
											return (
												<>
													<div className={classes.featureBox}>
														<FiCheckCircle className={classes.featureIcon} />
														{title}
													</div>
												</>
											);
										})}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProperty;
