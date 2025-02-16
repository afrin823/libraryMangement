import Swal from "sweetalert2";

 export const responseMessage = (status, message, title) => {
    return   Swal.fire({
            icon: status,
            title: title,
            text: message,
            confirmButtonText: 'OK'
          });
}