import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../assets/logo.svg";

const Header = () => {
	return (
		<Navbar
			expand="lg"
			variant="light"
			sticky="top"
			style={{
				padding: "0.3rem 1rem",
				backgroundColor: "#009fd6",
				height: "42px",
			}}>
			<Container>
				<Navbar.Brand href="#">
					<img alt="" src={Logo} width="90" height="30" className="d-inline-block align-top" />
					<span
						className="ps-3 pt-1 d-inline-block align-top"
						style={{
							color: "#fff",
							fontFamily: "PN Medium",
							fontSize: "14px",
						}}>
						Terminal Master
					</span>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
