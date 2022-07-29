import { Routes, Route } from "react-router-dom";
import Dashboard from "../src/Pages/AdminPanel/Dashboard";
import Properties from "../src/Pages/AdminPanel/Properties";
import Providers from "../src/Pages/AdminPanel/Providers";
import Rooms from "../src/Pages/AdminPanel/Rooms";
import Agent from "../src/Pages/AdminPanel/Agent";
import Tenants from "../src/Pages/AdminPanel/Tenants";
import Viewings from "../src/Pages/AdminPanel/Viewings";
import AddProperty from "../src/Pages/AdminPanel/AddProperty";
import SingleProperty from "../src/Pages/AdminPanel/SingleProperty";
import AddProvider from "./Pages/AdminPanel/AddProvider";
import AddAgent from "./Pages/AdminPanel/AddAgent";
import AddTenants from "./Pages/AdminPanel/AddTenants";
import AddViewings from "./Pages/AdminPanel/AddViewings";
import AdminPanel from "./Layouts/AdminPanel";
import ProviderPanel from "./Layouts/ProviderPanel";
import ProviderDashboard from "./Pages/ProviderPanel/Dashboard";
import Profile from "./Pages/ProviderPanel/Profile";
import ProviderProperties from "./Pages/ProviderPanel/Properties";
import AddProviderProperty from "./Pages/ProviderPanel/AddProperty";
import SingleProviderProperty from "./Pages/ProviderPanel/SingleProperty";
import ProviderViewings from "./Pages/ProviderPanel/Viewings";
import AgentPanel from "./Layouts/AgentPanel";
import AgentDashboard from "./Pages/AgentPanel/Dashboard";
import AgentProfile from "./Pages/AgentPanel/Profile";
import AgentProperties from "./Pages/AgentPanel/Properties";
import AgentSingleProperty from "./Pages/AgentPanel/SingleProperty";
import Login from "./Pages/Login/Login";
import UserProfile from "../src/Components/Profile/Profile";
import AddRoom from "./Pages/AdminPanel/AddRoom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/admin" element={<AdminPanel />}>
					<Route index element={<Dashboard />} />
					<Route path="myprofile" element={<UserProfile />} />
					<Route path="properties" element={<Properties />} />
					<Route path="properties/:id" element={<SingleProperty />} />
					<Route path="properties/add" element={<AddProperty />} />
					<Route path="rooms" element={<Rooms />} />
					<Route path="rooms/add" element={<AddRoom />} />
					<Route path="providers" element={<Providers />} />
					<Route path="providers/add" element={<AddProvider />} />
					<Route path="agent" element={<Agent />} />
					<Route path="agent/add" element={<AddAgent />} />
					<Route path="tenants" element={<Tenants />} />
					<Route path="tenants/add" element={<AddTenants />} />
					<Route path="viewings" element={<Viewings />} />
					<Route path="viewings/add" element={<AddViewings />} />
				</Route>
				<Route path="/provider" element={<ProviderPanel />}>
					<Route index path="dashboard" element={<ProviderDashboard />} />
					<Route path="myprofile" element={<UserProfile />} />
					<Route path="profile" element={<Profile />} />
					<Route path="properties" element={<ProviderProperties />} />
					<Route path="properties/:id" element={<SingleProviderProperty />} />
					<Route path="properties/add" element={<AddProviderProperty />} />
					<Route path="viewings" element={<ProviderViewings />} />
				</Route>
				<Route path="/agentpanel" element={<AgentPanel />}>
					<Route index path="dashboard" element={<AgentDashboard />} />
					<Route path="myprofile" element={<UserProfile />} />
					<Route path="profile" element={<AgentProfile />} />
					<Route path="properties" element={<AgentProperties />} />
					<Route path="properties/:id" element={<AgentSingleProperty />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
