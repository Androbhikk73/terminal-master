import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

const Search = () => {
	const [seePass, setSeePass] = React.useState(false);

	const _setVisibility = () => {
		let visible = seePass;
		setSeePass(!visible);
	};

	return (
		<Container
			className="mt-4 rounded"
			style={{
				boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
			}}>
			<Row className="p-2">
				<Col>
					<Form.Group as={Row} className="my-3" controlId="formBasicName">
						<Form.Label column sm={2} className="pt-1 mb-0" style={{ fontFamily: "PN Regular", fontSize: "14px" }}>
							Name
						</Form.Label>
						<Col sm={10}>
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
						</Col>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group as={Row} className="my-3" controlId="formBasicDepartment">
						<Form.Label column sm={3} className="pt-1 mb-0" style={{ fontFamily: "PN Regular", fontSize: "14px" }}>
							Department
						</Form.Label>
						<Col sm={9}>
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
						</Col>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group as={Row} className="my-3" controlId="formBasicPassword">
						<Form.Label column sm={2} className="pt-1 mb-0" style={{ fontFamily: "PN Regular", fontSize: "14px" }}>
							Password
						</Form.Label>
						<Col sm={10}>
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
						</Col>
					</Form.Group>
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
