import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import DataTable from "react-data-table-component";
import data from "../../data/providerData.json";
import classes from "../../Styles/AdminPanel/Providers.module.css";

const columns = [
	{
		name: "Provider ID",
		selector: (row) => row.providerID,
	},
	{
		name: "Provider",
		selector: (row) => row.provider,
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

const Providers = () => {
	const [search, setSearch] = useState("");
	const [filterData, setFilterData] = useState("");

	const handleSearch = () => {
		const result = data.filter((provider) => {
			return (
				provider.provider.toLowerCase().match(search.toLowerCase()) ||
				provider.providerID.toLowerCase().match(search.toLowerCase()) ||
				provider.email.toLowerCase().match(search.toLowerCase()) ||
				provider.phone.toLowerCase().match(search.toLowerCase()) ||
				provider.totalProperties.toLowerCase().match(search.toLowerCase())
			);
		});

		setFilterData(result);
	};

	useEffect(() => {
		handleSearch();
	}, [search]);
	return (
		<div className={`section ${classes.providers}`}>
			<SectionTitle section="Providers" subject="All Providers" />

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

export default Providers;
