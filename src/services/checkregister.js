export const checkRegister = (e) => {
  let name = e.target.name;
  let email = e.target.email;
  let password = e.target.password;
  let confirmPassword = e.target.confirmPassword;

  if (name.value === "") {
    name.style.border = "2px solid #2ea9ff";
    return "Insira um Nome de usuário.";
  }
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
  if (confirmPassword.value === "") {
    confirmPassword.style.border = "2px solid #2ea9ff";
    return "Confirme sua Senha.";
  }
  if (password.value != confirmPassword.value) {
    confirmPassword.style.border = "2px solid #2ea9ff";
    return "Confirmação de senha incorreta.";
  }
  return null;
};
