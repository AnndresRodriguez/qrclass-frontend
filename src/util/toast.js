import Swal from "sweetalert2";

export function fireToast(icon, title, text) {
  Swal.fire({
    icon,
    title,
    text,
    confirmButtonText: "Aceptar"
  });

  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: "bottom-end",
  //     showConfirmButton: false,
  //     timer: 5000,
  //   });

  //   Toast.fire({
  //     icon,
  //     title
  //   });
}
