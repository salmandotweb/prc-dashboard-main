import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import DataTable from "react-data-table-component";
import data from "../../data/viewingsData.json";

const columns = [
	{
		name: "Property ID",
		selector: (row) => row.propertyID,
	},
	{
		name: "",
		selector: (row) => <img height={70} width={70} src={row.img} />,
		grow: ".1",
	},
	{
		name: "Property",
		selector: (row) => row.property,
		grow: "2.5",
	},
	{
		name: "Agent",
		selector: (row) => row.agent,
	},
	{
		name: "Date",
		selector: (row) => row.date,
	},
	{
		name: "Time",
		selector: (row) => row.time,
	},
	{
		name: "Tenants",
		selector: (row) => row.tenant,
	},
];

const customStyles = {
	pagination: {
		style: {
			border: "none",
		},
	},
};

const Viewings = () => {
	const [search, setSearch] = useState("");
	const [filterData, setFilterData] = useState("");

	const handleSearch = () => {
		const result = data.filter((viewing) => {
			return (
				viewing.property.toLowerCase().match(search.toLowerCase()) ||
				viewing.propertyID.toLowerCase().match(search.toLowerCase()) ||
				viewing.agent.toLowerCase().match(search.toLowerCase()) ||
				viewing.date.toLowerCase().match(search.toLowerCase()) ||
				viewing.time.toLowerCase().match(search.toLowerCase())
			);
		});

		setFilterData(result);
	};

	useEffect(() => {
		handleSearch();
	}, [search]);
	return (
		<div className="section">
			<SectionTitle section="Properties" subject="All Properties" />

			<DataTable
				columns={columns}
				data={filterData}
				customStyles={customStyles}
				pagination
				subHeader
				subHeaderComponent={
					<input
						type="search"
						placeholder="Search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="input"
					/>
				}
			/>
		</div>
	);
};

export default Viewings;
