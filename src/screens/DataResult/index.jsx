import React from "react";
import { Container, Card, Table, Pagination } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import "./DataResTable.css";

const DataResult = () => {
	const [userData, setUserData] = React.useState([]);
	const [dataCount, setDataCount] = React.useState(1);

	return (
		<Container className="pt-4 px-3">
			<Card>
				<Card.Header style={{ fontFamily: "PN Medium", fontSize: "14px" }}>Terminal User Results</Card.Header>
				<Card.Body>
					<>
						<Table bordered className="result-table">
							<thead>
								<tr>
									<th></th>
									<th>User ID</th>
									<th>User Name</th>
									<th>Department</th>
									<th>Deleted On</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text-center">1</td>
									<td>UID001</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>2021-10-18 15:52</td>
									<td className="text-center">
										<Trash size={18} style={{ color: "red" }} />
									</td>
								</tr>
								<tr>
									<td className="text-center">2</td>
									<td>UID001</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>2021-10-18 15:52</td>
									<td className="text-center">
										<Trash size={18} style={{ color: "red" }} />
									</td>
								</tr>
								<tr>
									<td className="text-center">3</td>
									<td>UID001</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>2021-10-18 15:52</td>
									<td className="text-center">
										<Trash size={18} style={{ color: "red" }} />
									</td>
								</tr>
								<tr>
									<td className="text-center">4</td>
									<td>UID001</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>2021-10-18 15:52</td>
									<td className="text-center">
										<Trash size={18} style={{ color: "red" }} />
									</td>
								</tr>
								<tr>
									<td className="text-center">5</td>
									<td>UID001</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>2021-10-18 15:52</td>
									<td className="text-center">
										<Trash size={18} style={{ color: "red" }} />
									</td>
								</tr>
								<tr>
									<td className="text-center">6</td>
									<td>UID001</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>2021-10-18 15:52</td>
									<td className="text-center">
										<Trash size={18} style={{ color: "red" }} />
									</td>
								</tr>
								<tr>
									<td className="text-center">7</td>
									<td>UID001</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>2021-10-18 15:52</td>
									<td className="text-center">
										<Trash size={18} style={{ color: "red" }} />
									</td>
								</tr>
								<tr>
									<td className="text-center">8</td>
									<td>UID001</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>2021-10-18 15:52</td>
									<td className="text-center">
										<Trash size={18} style={{ color: "red" }} />
									</td>
								</tr>
							</tbody>
						</Table>

						<div className="d-flex justify-content-end pt-1" style={{ fontSize: "12px" }}>
							<Pagination>
								<Pagination.First />
								<Pagination.Prev />
								<Pagination.Item>{1}</Pagination.Item>
								<Pagination.Ellipsis />

								<Pagination.Item>{10}</Pagination.Item>
								<Pagination.Item>{11}</Pagination.Item>
								<Pagination.Item active>{12}</Pagination.Item>
								<Pagination.Item>{13}</Pagination.Item>
								<Pagination.Item disabled>{14}</Pagination.Item>

								<Pagination.Ellipsis />
								<Pagination.Item>{20}</Pagination.Item>
								<Pagination.Next />
								<Pagination.Last />
							</Pagination>
						</div>
					</>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default DataResult;
