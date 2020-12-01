export let daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

export function configLangSchedule() {
  document.querySelectorAll('[data-val="00.00"]')[0].innerHTML =
    "6 A.M a 7 A.M";
  document.querySelectorAll('[data-val="04.00"]')[0].innerHTML =
    "7 A.M a 8 A.M";
  document.querySelectorAll('[data-val="08.00"]')[0].innerHTML =
    "8 A.M a 9 A.M";
  document.querySelectorAll('[data-val="12.00"]')[0].innerHTML =
    "9 A.M a 10 A.M";
  document.querySelectorAll('[data-val="16.00"]')[0].innerHTML =
    "10 A.M a 11 A.M";
  document.querySelectorAll('[data-val="20.00"]')[0].innerHTML =
    "11 A.M a 12 P.M";
}
