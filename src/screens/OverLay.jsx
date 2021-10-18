import React from "react";
import { Offcanvas, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { X, EyeFill, EyeSlashFill } from "react-bootstrap-icons";

const OverLay = ({ show, hide }) => {
	const [seePass, setSeePass] = React.useState(false);

	const _setVisibility = () => {
		let visible = seePass;
		setSeePass(!visible);
	};

	return (
		<Offcanvas show={show}>
			<Offcanvas.Header
				style={{
					borderBottom: "1px solid rgba(246, 246, 246, 0.84)",
				}}>
				<Offcanvas.Title>Terminal User</Offcanvas.Title>
				<div
					role="button"
					style={{
						top: "20px",
						right: "-40px",
						position: "absolute",
						color: "#f00d0d",
						backgroundColor: "aliceblue",
						borderRadius: "50%",
					}}>
					<X size={30} style={{ color: "#000" }} onClick={() => hide()} />
				</div>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<>
					<Row className="px-1 py-2">
						<Col>
							<Form.Group as={Row} controlId="formBasicName">
								<Form.Label
									column
									sm={2}
									className="pt-1 mb-0"
									style={{ fontFamily: "PN Regular", fontSize: "14px" }}>
									User&nbsp;ID
								</Form.Label>
								<Col sm={10}>
									<Form.Control
										type="text"
										placeholder="Enter User ID"
										className="rounded-0"
										style={{
											fontSize: "12px",
											fontFamily: "PN Regular",
											padding: "0.35rem 0.5rem",
										}}
									/>
								</Col>
							</Form.Group>
						</Col>
					</Row>
					<Row className="p-1">
						<Col>
							<Form.Group className="my-3" controlId="formBasicName">
								<Form.Label column className="pt-1 mb-0" style={{ fontFamily: "PN Regular", fontSize: "13px" }}>
									Name
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter Name"
									className="rounded-0"
									style={{
										fontSize: "12px",
										fontFamily: "PN Regular",
										padding: "0.35rem 0.5rem",
									}}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group className="my-3" controlId="formBasicDepartment">
								<Form.Label column className="pt-1 mb-0" style={{ fontFamily: "PN Regular", fontSize: "13px" }}>
									Department
								</Form.Label>
								<Form.Select
									aria-label="Department"
									className="rounded-0"
									style={{
										fontSize: "12px",
										fontFamily: "PN Regular",
										padding: "0.35rem 0.5rem",
									}}>
									<option value="">ABC</option>
								</Form.Select>
							</Form.Group>
						</Col>
					</Row>
					<Row className="px-1 pb-2">
						<Form.Group controlId="formBasicPassword">
							<Form.Label column className="pt-1 mb-0" style={{ fontFamily: "PN Regular", fontSize: "13px" }}>
								Password
							</Form.Label>

							<InputGroup>
								<Form.Control
									type={seePass ? "text" : "password"}
									placeholder="Type Password"
									className="rounded-0"
									style={{
										fontSize: "12px",
										fontFamily: "PN Regular",
										padding: "0.35rem 0.5rem",
									}}
								/>

								{seePass ? (
									<EyeFill role="button" size={20} className="mx-2 mt-1" onClick={() => _setVisibility()} />
								) : (
									<EyeSlashFill
										role="button"
										size={20}
										className="mx-2 mt-1"
										style={{ cursor: "pointer" }}
										onClick={() => _setVisibility()}
									/>
								)}
							</InputGroup>
						</Form.Group>
					</Row>
					<Row className="p-2 mt-4">
						<Col>
							<Button
								type="button"
								variant="outline-danger"
								className="w-100"
								style={{
									fontSize: "12px",
									fontFamily: "PN Regular",
									padding: "0.35rem 0.5rem",
								}}>
								Reset
							</Button>
						</Col>
						<Col>
							<Button
								type="button"
								variant="outline-primary"
								className="w-100"
								style={{
									fontSize: "12px",
									fontFamily: "PN Regular",
									padding: "0.35rem 0.5rem",
								}}>
								Submit
							</Button>
						</Col>
					</Row>
				</>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default OverLay;
