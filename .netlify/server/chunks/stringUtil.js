function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function unCapitalizeFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
export {
  capitalizeFirstLetter as c,
  unCapitalizeFirstLetter as u
};
