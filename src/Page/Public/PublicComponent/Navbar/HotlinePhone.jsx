import { Link } from "react-router";
import Swal from "sweetalert2";
import { useAuthContext } from "../../../../AuthProvider/AuthProvider";
import LanguageControl from "../../../../Component/LanguageControl";

const HotlinePhone = () => {
  const { user, logout } = useAuthContext(); // Assuming `registerUser` function is available in context
  const logOutLibrary = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    })
  .then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire(
          'Logged Out!',
          'You have been successfully logged out.',
          'success'
        );
      }
    });
  };

  return (
    <div className=" space-x-3   text-xs">
      <LanguageControl />
      <span className="">Hotline : +321 11122233</span>
      {!user ? (
        <>
          <Link to="/login">
            <span className="font-bold cursor-pointer">Sing In</span>
          </Link>
          <Link to="/register">
            <span className="font-bold cursor-pointer">Sing Up</span>
          </Link>
        </>
      ) : (
        <>
          <span onClick={logOutLibrary} className="text-danger cursor-pointer">Log Out</span>
        </>
      )}
    </div>
  );
};

export default HotlinePhone;
