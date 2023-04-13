export const checkLogin = (e) => {
  let email = e.target.email_login;
  let password = e.target.password_login;

  if (email.value === "") {
    email.style.border = "2px solid #2ea9ff";
    return "Insira um endereço de email.";
  }
  let regexEmail =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
  if (!regexEmail.test(email.value)) {
    email.style.border = "2px solid #2ea9ff";
    return "Insira um email valido";
  }
  if (password.value === "") {
    password.style.border = "2px solid #2ea9ff";
    return "Insira uma Senha.";
  }
  return null;
};
