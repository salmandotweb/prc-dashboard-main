// call this function to store the token
const storeToken = (token) => {
	localStorage.setItem("token", token);
};
// call this function to get the token
const getToken = () => {
	let token = localStorage.getItem("token");
	return token;
};
// call this function to remove the token
const removeToken = (token) => {
	localStorage.removeItem("token", token);
};

// exporting the functions
export { storeToken, getToken, removeToken };
