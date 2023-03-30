export const keyWorldTracker = (text) => {
  let result = "";
  if (
    text.includes("usuario") ||
    text.includes("uzuario") ||
    text.includes("user")
  ) {
    result = "usuarios";
  } else if (
    text.includes("pagamento") || 
    text.includes("payment")
  ) {
    result = "pagamentos";
  } else if (
    text.includes("segurança") ||
    text.includes("security") ||
    text.includes("seguranca")
  ) {
    result = "seguranças";
  }
  return result;
};