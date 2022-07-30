import React, { useEffect, useState } from "react";
import classes from "../../Styles/AdminPanel/Properties.module.css";
import SectionTitle from "../../Components/SectionTitle";
import DataTable from "react-data-table-component";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import { useAllPropertiesQuery } from "../../services/userAuthApi";
import { getToken } from "../../services/LocalStorageService";

const columns = [
	{
		name: "Property ID",
		selector: (row) => row.id,
	},
	{
		name: "",
		selector: (row) => <img height={70} width={70} src={row.img} />,
		grow: ".1",
	},
	{
		name: "Property",
		selector: (row) => row.title,
		grow: "2.5",
	},
	{
		name: "City",
		selector: (row) => row.city,
	},
	{
		name: "Type",
		selector: (row) => row.property_type,
	},
	{
		name: "Price",
		selector: (row) => row.price,
	},
	{
		name: "Date & Time",
		selector: (row) => row.created_at,
		grow: "2",
	},
	{
		name: "",
		cell: (row) => (
			<Link to={`/admin/properties/${row.id}`}>
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

const Properties = () => {
	const [search, setSearch] = useState("");
	const [filterData, setFilterData] = useState("");

	const token = getToken();

	const { data: properties, error, isLoading } = useAllPropertiesQuery(token);

	const propertiesData = properties?.properties;

	const handleSearch = () => {
		const newFilter = propertiesData?.filter((value) => {
			return (
				value.title?.toLowerCase().includes(search.toLowerCase()) ||
				value.city?.toLowerCase().includes(search.toLowerCase()) ||
				value.property_type?.toLowerCase().includes(search.toLowerCase()) ||
				value.price?.toLowerCase().includes(search.toLowerCase())
			);
		});

		setFilterData(newFilter);
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

export default Properties;
