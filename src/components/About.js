import React, { useState } from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import profilePic from "../images/profile_me.jpg";

const About = ({
	name = "Aryan Raj Choudhury",
	about = "ok",
	aboutParagraph1 = "I am currently in the final year of my B. Tech in Computer Science, equipped with a strong academic foundation in core computer science subjects such as data structures, algorithms, operating systems, and system design. Over the past few years, I’ve actively applied this knowledge through a diverse range of projects in web development and machine learning allowing me to blend theoretical concepts with practical implementation.",
	aboutParagraph2 = "I am deeply passionate about Data Science and Machine Learning. I have hands-on experience across the full ML pipeline—starting from data collection and cleaning, exploratory data analysis, feature engineering, model selection, and evaluation. I find the process of uncovering hidden patterns in data and translating them into actionable insights both intellectually stimulating and highly rewarding. Whether it’s building predictive models, experimenting with algorithms, or visualizing data trends, I genuinely enjoy working with data to drive decision-making.",
	aboutParagraph3 = "I’m a fast learner, always curious about emerging technologies, and I actively keep myself updated with new tools, frameworks, and research in both the software and data domains. As I move forward in my career, I aspire to contribute to innovative, high-impact projects—whether it’s through developing scalable software systems or solving data-driven problems that create real value.",
	aboutParagraph4 = "",
	professionalStats = [ {
  "number" : "8.54",
  "label" : "CGPA"
}, {
  "number" : "10+",
  "label" : "Projects"
} ]
}) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2
			}
		}
	};

	const fadeInUp = {
		hidden: {
			y: 60,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut"
			}
		}
	};

	const fadeInLeft = {
		hidden: {
			x: -80,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut"
			}
		}
	};

	const fadeInRight = {
		hidden: {
			x: 80,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut"
			}
		}
	};

	const imageVariants = {
		hidden: {
			scale: 0.8,
			opacity: 0
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 1,
				ease: "easeOut"
			}
		}
	};

	const stats = professionalStats;

	return (
		<section className="about" id="about">
			<div className="container">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="about-wrapper"
				>
					{/* Section Header */}
					<motion.div variants={fadeInUp} className="heading">
						<span className="heading-sub-text">Get to know me</span>
						<h2 className="heading-text">About Me</h2>
						<div className="heading-divider"></div>
					</motion.div>

					{/* Main Content */}
					<div className="split-about">
						<motion.div
							variants={fadeInLeft}
							className="about-content"
						>
							<div className="content-text">
								<p className="intro-text">
									Hello! I'm <span className="highlight">{name}</span>
								</p>
								{aboutParagraph1 && <p>{aboutParagraph1}</p>}
								{aboutParagraph2 && <p>{aboutParagraph2}</p>}
								{aboutParagraph3 && <p>{aboutParagraph3}</p>}
								{aboutParagraph4 && <p>{aboutParagraph4}</p>}
							</div>
						</motion.div>

						<motion.div
							variants={fadeInRight}
							className="about-visual"
						>
							{/* Profile Image */}
							<div className="image-container">
								<motion.div
									variants={imageVariants}
									className="about-img"
								>
									<img
										src={profilePic}
										alt={`${name} - ${about}`}
										onLoad={() => setImageLoaded(true)}
										className={imageLoaded ? 'loaded' : ''}
									/>
									<div className="image-overlay"></div>
								</motion.div>
							</div>

							{/* Stats Section */}
							<div className="stats-container">
								{stats.map((stat, index) => (
									<motion.div
										key={stat.label}
										className="stat-item"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1, duration: 0.6 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.05 }}
									>
										<div className="stat-number">{stat.number}</div>
										<div className="stat-label">{stat.label}</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;