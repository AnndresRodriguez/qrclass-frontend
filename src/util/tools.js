export function createURL(roleID) {
  switch (roleID) {
    case "1":
      roleID = "admin";
      break;
    case "2":
      roleID = "docentes";
      break;
    case "3":
      roleID = "directores";
      break;
    case "4":
      roleID = "estudiantes";
      break;
  }

  return roleID;
}

export function dashboardRole(roleID) {
  switch (roleID) {
    case "1":
      roleID = "Sidebaradmin";
      break;
    case "2":
      roleID = "SidebarDocente";
      break;
    case "3":
      roleID = "SidebarDirector";
      break;
    case "4":
      roleID = "SidebarEstudiante";
      break;
  }

  return roleID;
}

export function formatHour(hour) {
  let timeString = hour;
  let H = +timeString.substr(0, 2);
  let h = H % 12 || 12;
  let ampm = H < 12 ? " A.M." : " P.M.";
  let M = timeString.substr(2, 3);

  if (h < 10) {
    h = `0${h}`;
  }

  if (parseInt(timeString.substr(2, 3).split(":")[1]) < 10) {
    M = `:0${timeString.substr(2, 3).split(":")[1]}`;
  }

  timeString = h + M + ampm;

  return timeString;
}

export function formatDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function formatAssistance(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function formatNewAssistance(date) {
  let fecha = date;
  let dia = fecha.getDate();
  console.log("dia", dia);
  console.log("fecha", fecha);
  // const formatDay = formatNumber(date.getDate());
  // const formatMonth = formatNumber(`${date.getMonth() + 1}`);
  return `${dia}/${getNameMonth(
    `${date.getMonth() + 1}`
  )}/${date.getFullYear()}`;
}

// function formatNumber(numero) {
//   const format = numero < 10 ? `0${numero}` : numero;
//   return format;
// }

export function onlyNumbers($event) {
  let keyCode = $event.keyCode ? $event.keyCode : $event.which;
  if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
    // 46 is dot
    $event.preventDefault();
  }
}

function getNameMonth(month) {
  switch (parseInt(month)) {
    case 1:
      return "Ene";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Abr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Ago";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dic";
    default:
      return month;
  }
}
