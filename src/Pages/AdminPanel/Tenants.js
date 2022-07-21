import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import DataTable from "react-data-table-component";
import data from "../../data/tenantData.json";

const columns = [
	{
		name: "Tenant ID",
		selector: (row) => row.tenantID,
	},
	{
		name: "Tenant",
		selector: (row) => row.tenant,
	},
	{
		name: "Address",
		selector: (row) => row.address,
	},
	{
		name: "Email",
		selector: (row) => row.email,
	},
	{
		name: "Phone",
		selector: (row) => row.phone,
	},
];

const customStyles = {
	pagination: {
		style: {
			border: "none",
		},
	},
};

const Tenants = () => {
	const [search, setSearch] = useState("");
	const [filterData, setFilterData] = useState("");

	const handleSearch = () => {
		const result = data.filter((tenant) => {
			return (
				tenant.tenant.toLowerCase().match(search.toLowerCase()) ||
				tenant.tenantID.toLowerCase().match(search.toLowerCase()) ||
				tenant.email.toLowerCase().match(search.toLowerCase()) ||
				tenant.phone.toLowerCase().match(search.toLowerCase())
			);
		});

		setFilterData(result);
	};

	useEffect(() => {
		handleSearch();
	}, [search]);
	return (
		<div className="section">
			<SectionTitle section="Tenants" subject="All Tenants" />

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

export default Tenants;
