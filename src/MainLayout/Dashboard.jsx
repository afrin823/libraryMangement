import { Outlet } from "react-router";

 

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
};

export default Dashboard;