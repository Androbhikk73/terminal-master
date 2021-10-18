import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import axios from "axios";
import Header from "./Navbar";
import Search from "./Search";
import OverLay from "./OverLay";
import DataResult from "./DataResult";

const Screen = () => {
	const [showOverLay, setShowOverLay] = React.useState(false);

	const handleClose = () => setShowOverLay(false);
	const handleShow = () => setShowOverLay(true);

	return (
		<div>
			<Header />
			<Search />

			<>
				<Container className="mt-3 pt-2">
					<Row className="p-1">
						<Col>
							<div
								className="pt-1 mb-0 d-flex justify-content-end"
								style={{ fontFamily: "PN Regular", fontSize: "14px" }}>
								<span role="button" className="d-inline-flex" onClick={handleShow}>
									<Plus size={20} /> Add New
								</span>
							</div>
						</Col>
					</Row>
				</Container>

				<OverLay show={showOverLay} hide={handleClose} />
			</>

			<DataResult />
		</div>
	);
};

export default Screen;
