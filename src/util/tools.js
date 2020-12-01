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
