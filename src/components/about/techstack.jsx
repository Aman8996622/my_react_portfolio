import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiJava,
	DiAndroid,
	DiApple,
} from "react-icons/di";
import { SiFirebase, SiMysql, SiFlutter } from "react-icons/si";

function Techstack() {
	return (
		<Row
			style={{
				justifyContent: "center",
				paddingBottom: "50px",
				display: "flex",
				flexDirection: "row",
			}}
		>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#61DAFB" }}
			>
				<DiReact />
			</Col>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#00599C" }}
			>
				<CgCPlusPlus />
			</Col>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#007396" }}
			>
				<DiJava />
			</Col>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#F7DF1E" }}
			>
				<DiJavascript1 />
			</Col>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#339933" }}
			>
				<DiNodejs />
			</Col>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#02569B" }}
			>
				<SiFlutter />
			</Col>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#3DDC84" }}
			>
				<DiAndroid />
			</Col>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#000000" }}
			>
				<DiApple />
			</Col>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#FFCA28" }}
			>
				<SiFirebase />
			</Col>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#4479A1" }}
			>
				<SiMysql />
			</Col>
			<Col
				xs={4}
				md={2}
				className="tech-icons"
				style={{ fontSize: "4rem", margin: "10px", color: "#47A248" }}
			>
				<DiMongodb />
			</Col>
		</Row>
	);
}

export default Techstack;
