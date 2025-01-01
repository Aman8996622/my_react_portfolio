import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import "./styles/articles.css";

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const experiences = [
		{
			company: "Tribond Infosystems Pvt Ltd",
			position: "Software Engineer",
			duration: "July 2022 - Present",
			responsibilities: [
				"My role involves designing, developing, deploying, and maintaining cross-platform mobile applications using the Flutter framework.",
				"Integrated authentication mechanisms, including social media logins, email/password authentication, and multi-factor authentication.",
				"Collaborated with cross-functional teams to gather requirements, design, and implement new features.",
				"Created visually appealing and user-friendly interfaces that enhance user experience.",
			],
			technologies: [
				"React",
				"Node.js",
				"MongoDB",
				"Flutter",
				"Dart",
				"Firebase",
				"Gitlab",
				"Bitbucket",
				"CI/CD",
				"MySQL",
				"PostgreSQL",
				"Typescript",
			],
		},
	];

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							Work Experience
						</div>

						<div className="subtitle articles-subtitle">
							My professional journey and contributions
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{experiences.map((exp, index) => (
									<div
										className="experience-card"
										key={index}
										style={{
											backgroundColor: "#fff",
											boxShadow:
												"0 4px 8px rgba(0, 0, 0, 0.1)",
											padding: "20px",
											marginBottom: "20px",
											borderRadius: "8px",
											transition: "transform 0.2s",
										}}
									>
										<h3
											style={{
												marginBottom: "10px",
												color: "#333",
											}}
										>
											{exp.company}
										</h3>
										<h4
											style={{
												color: "#007bff",
												marginBottom: "8px",
											}}
										>
											{exp.position}
										</h4>
										<p
											style={{
												color: "#555",
												marginBottom: "16px",
											}}
										>
											{exp.duration}
										</p>

										<ul
											style={{
												paddingLeft: "20px",
												marginBottom: "16px",
											}}
										>
											{exp.responsibilities.map(
												(desc, i) => (
													<li
														key={i}
														style={{
															marginBottom: "8px",
															color: "#666",
														}}
													>
														{desc}
													</li>
												)
											)}
										</ul>

										<div style={{ marginTop: "10px" }}>
											<h5
												style={{
													color: "#007bff",
													marginBottom: "10px",
												}}
											>
												Technologies:
											</h5>
											{exp.technologies.map((tech, i) => (
												<span
													key={i}
													style={{
														background: "#f0f8ff",
														color: "#007bff",
														padding: "6px 12px",
														borderRadius: "15px",
														marginRight: "8px",
														fontSize: "14px",
														fontWeight: "500",
													}}
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
