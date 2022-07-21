import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import DataTable from "react-data-table-component";
import data from "../../data/agentData.json";
import classes from "../../Styles/AdminPanel/Providers.module.css";

const columns = [
	{
		name: "Agent ID",
		selector: (row) => row.agentID,
	},
	{
		name: "Agent",
		selector: (row) => row.agent,
	},
	{
		name: "Address",
		selector: (row) => row.address,
		grow: 2,
	},
	{
		name: "Email",
		selector: (row) => row.email,
	},
	{
		name: "Phone",
		selector: (row) => row.phone,
	},
	{
		name: "Total Properties",
		selector: (row) => row.totalProperties,
	},
];

const customStyles = {
	pagination: {
		style: {
			border: "none",
		},
	},
};

const Agent = () => {
	const [search, setSearch] = useState("");
	const [filterData, setFilterData] = useState("");

	const handleSearch = () => {
		const result = data.filter((agent) => {
			return (
				agent.agent.toLowerCase().match(search.toLowerCase()) ||
				agent.agentID.toLowerCase().match(search.toLowerCase()) ||
				agent.email.toLowerCase().match(search.toLowerCase()) ||
				agent.phone.toLowerCase().match(search.toLowerCase()) ||
				agent.totalProperties.toLowerCase().match(search.toLowerCase())
			);
		});

		setFilterData(result);
	};

	useEffect(() => {
		handleSearch();
	}, [search]);
	return (
		<div className={`section ${classes.agent}`}>
			<SectionTitle section="Agent" subject="All Agents" />

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
						className={`input ${classes.searchInput}`}
					/>
				}
			/>
		</div>
	);
};

export default Agent;
