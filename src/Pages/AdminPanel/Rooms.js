import React, { useEffect, useState } from "react";
import classes from "../../Styles/AdminPanel/Properties.module.css";
import SectionTitle from "../../Components/SectionTitle";
import DataTable from "react-data-table-component";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import data from "../../data/propertiesData.json";

const columns = [
	{
		name: "Room ID",
		selector: (row) => row.propertyID,
	},
	{
		name: "",
		selector: (row) => <img height={70} width={70} src={row.img} />,
		grow: ".1",
	},
	{
		name: "Rooms",
		selector: (row) => row.property,
		grow: "2.5",
	},
	{
		name: "City",
		selector: (row) => row.city,
	},
	{
		name: "Type",
		selector: (row) => row.type,
	},
	{
		name: "Price",
		selector: (row) => row.price,
	},
	{
		name: "Date & Time",
		selector: (row) => row.dateTime,
		grow: "2",
	},
	{
		name: "",
		cell: (row) => (
			<Link to={`/admin/properties/${row.propertyID}`}>
				<button className="btn">
					<GoLinkExternal />
				</button>
			</Link>
		),
		grow: ".1",
	},
];

const customStyles = {
	pagination: {
		style: {
			border: "none",
		},
	},
};

const Rooms = () => {
	const [search, setSearch] = useState("");
	const [filterData, setFilterData] = useState("");

	const handleSearch = () => {
		const result = data.filter((property) => {
			return (
				property.property.toLowerCase().match(search.toLowerCase()) ||
				property.propertyID.toLowerCase().match(search.toLowerCase()) ||
				property.price.toLowerCase().match(search.toLowerCase()) ||
				property.type.toLowerCase().match(search.toLowerCase()) ||
				property.city.toLowerCase().match(search.toLowerCase())
			);
		});

		setFilterData(result);
	};

	useEffect(() => {
		handleSearch();
	}, [search]);

	return (
		<div className={`${classes.properties} section`}>
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
						className={`input ${classes.searchInput}`}
					/>
				}
			/>
		</div>
	);
};

export default Rooms;
