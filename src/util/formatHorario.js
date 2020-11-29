export function formatNameDay(dia) {
  switch (dia) {
    case "Lunes":
      dia = "L";
      break;
    case "Martes":
      dia = "Ma";
      break;
    case "Miercoles":
      dia = "Mi";
      break;
    case "Jueves":
      dia = "J";
      break;
    case "Viernes":
      dia = "V";
      break;
  }

  return dia;
}

export function formatNameHour(hora) {
  return hora.split(":")[0];
}
