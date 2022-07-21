import React from "react";
import classes from "../../Styles/AdminPanel/SingleProperty.module.css";
import styles from "../../Styles/AgentPanel/Properties.module.css";
import SectionTitle from "../../Components/SectionTitle";
import { GoLocation } from "react-icons/go";
import Carousel from "../../Components/AdminPanel/Properties/Carousel";
import { BiBed } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import { BsMap } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TenantDetails from "../../Components/AgentPanel/Properties/TenantDetails";
import DateTime from "../../Components/AgentPanel/Properties/DateTime";
import PropertyDetails from "../../Components/AgentPanel/Properties/PropertyDetails";
import AgentDetails from "../../Components/AgentPanel/Properties/AgentDetails";

const SingleProperty = () => {
	const [show, setShow] = useState(false);
	const features = [
		"Furnished",
		"Air Conditioning",
		"Great Location",
		"Laundry",
		"Great Location",
		"Dryer",
	];
	const documents = [
		"Certificate 1",
		"Certificate 2",
		"Certificate 3",
		"Certificate 4",
	];

	const scaleIn = {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				durantion: 0.1,
				type: "spring",
				damping: 25,
				stiffness: 500,
			},
		},
		exit: {
			scale: 0,
			scale: 0,
			opacity: 0,
		},
	};
	return (
		<div className={`section ${classes.singlePropertyWrapper}`}>
			<SectionTitle section="Properties" subject="View Property" />

			<div className={classes.singlePropertyContainer}>
				<div className={classes.singleProperty}>
					<div className={styles.bookViewingContainer}>
						<div className={`${classes.title} ${styles.title}`}>
							<h4>1 Bedroom apartment for rent in Eden Grove, London, N7</h4>
							<p>
								<GoLocation /> High Rd, London N17, UK
							</p>
						</div>
						<div className={styles.bookViewing}>
							<button
								className={`btn ${styles.bookBtn}`}
								onClick={() => setShow(!show)}>
								<AiOutlineEye className={styles.eyeIcon} /> Book Viewing
							</button>
							<div className={`${classes.location} ${styles.location}`}>
								<p>
									PCM
									<span>£1,350</span>
								</p>
								<p>£311/P/W</p>
							</div>
						</div>
					</div>
					<AnimatePresence
						initial={false}
						exitBeforeEnter={true}
						onExitComplete={() => null}>
						{show && (
							<>
								<motion.div
									onClick={() => setShow(false)}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className={styles.backdrop}>
									<motion.div
										variants={scaleIn}
										initial="hidden"
										animate="visible"
										exit="exit"
										className={styles.bookModal}
										onClick={(e) => e.stopPropagation()}>
										<div className={styles.cardsContainer}>
											<div className={styles.left}>
												<TenantDetails />
												<PropertyDetails />
											</div>
											<div className={styles.right}>
												<DateTime />
												<AgentDetails />
											</div>
										</div>
										<div className={styles.submitBtnContainer}>
											<button
												className={`btn ${styles.submitBtn}`}
												onClick={() => setShow(false)}>
												Submit
											</button>
										</div>
									</motion.div>
								</motion.div>
							</>
						)}
					</AnimatePresence>

					<div className={classes.propertyDetailsContainer}>
						<Carousel />
						<div className={classes.propertyDetails}>
							<div className={classes.overview}>
								<h4>Overview</h4>
								<h4>
									Property ID
									<span>C0001</span>
								</h4>
							</div>
							<div className={classes.flatDetails}>
								<div className={classes.flatType}>
									<p>Property Type</p>
									<h4>Flat</h4>
								</div>
								<div className={classes.flatType}>
									<p>Bedroom</p>
									<h4>
										<BiBed className={classes.icon} /> <span>1</span>
									</h4>
								</div>
								<div className={classes.flatType}>
									<p>Bathroom</p>
									<h4>
										<GiBathtub className={classes.icon} /> <span>1</span>
									</h4>
								</div>
							</div>
							<div className={classes.description}>
								<h4>Description</h4>
								<p>
									Brand new newly refurbished 1 bed garden flat for rent. The
									property comprise of a separate reception room/open plan
									kitchen, double bedroom, shower/toilet and own private garden.
									Within easy reach of Tottenham Hale and Seven Sisters
									underground stations. Available 18th March 2022.
								</p>
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
									<h4>High Road</h4>
								</div>
								<div className={classes.flatType}>
									<p>City</p>
									<h4>London</h4>
								</div>
								<div className={classes.flatType}>
									<p>Postal Code</p>
									<h4>N17 6QN</h4>
								</div>
							</div>
							<div className={classes.propertyFeatures}>
								<div className="title">
									<h3>Property Features</h3>
								</div>
								<div className={classes.featuresContainer}>
									{features.map((feature) => {
										return (
											<>
												<div className={classes.featureBox}>
													<FiCheckCircle className={classes.featureIcon} />
													{feature}
												</div>
											</>
										);
									})}
								</div>
								<div className={styles.propertyDocuments}>
									<div className="title">
										<h3>Property Documents</h3>
									</div>
									<div className={styles.documentsContainer}>
										{documents.map((feature) => {
											return (
												<>
													<div className={classes.featureBox}>
														<IoDocumentTextOutline
															className={styles.documentIcon}
														/>
														{feature}
													</div>
												</>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProperty;
