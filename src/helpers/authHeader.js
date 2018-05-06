export function authHeader() {
  let token = JSON.parse(localStorage.getItem('user'));

  if (token) {
    return {
      'Authorization-Token': token
    }
  }
  return {};

}