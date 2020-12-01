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
