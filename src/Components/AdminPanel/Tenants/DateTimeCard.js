import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "../../../Styles/AdminPanel/AddTenants.module.css";

const DateTimeCard = () => {
	const [dateRange, setDateRange] = useState([null, null]);
	const [startDate, endDate] = dateRange;
	const [time, setTime] = useState("");
	return (
		<div className={`card ${classes.dateCard}`}>
			<div className="title">
				<h3>Date and Time</h3>
			</div>
			<div className={classes.inputsContainer}>
				<DatePicker
					selectsRange={true}
					startDate={startDate}
					endDate={endDate}
					onChange={(update) => {
						setDateRange(update);
					}}
					withPortal
					className={`input ${classes.dateInput}`}
					placeholderText="Select Date"
				/>
				<input
					type="time"
					placeholder="Time"
					className="input"
					value={time}
					onChange={(e) => setTime(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default DateTimeCard;
