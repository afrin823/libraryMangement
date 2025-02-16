import ManagementOne from "./ManagementOne";
import ManagementTwo from "./ManagementTwo";

const ManageMentTeam = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative border-l border-gray-200 ml-3">
                <ManagementOne />
            </div>
            <div className="relative border-l border-gray-200 ml-3">
                <ManagementTwo />
            </div>
        </div>

    );
};

export default ManageMentTeam;