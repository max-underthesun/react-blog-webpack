// export default function present(variable) {
//   return typeof variable !== 'undefined' && variable !== null;
// }

export function present(variable) {
  return typeof variable !== 'undefined' && variable !== null;
}

export function blank(variable) {
  return !present(variable);
}


// import { blank } from 'helpers/presence';
//
// if (blank(posts) || posts.length === 0) {
