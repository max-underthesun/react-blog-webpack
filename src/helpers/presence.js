export function present(variable) {
  return typeof variable !== 'undefined' && variable !== null;
}

export function blank(variable) {
  return !present(variable);
}
