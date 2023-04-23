export const keyWorldTracker = (text) => {
  let result = "";
  if (text == "") {
   result = "Nada"
  } else if (
    text.includes("usuario") ||
    text.includes("uzuario") ||
    text.includes("user") ||
    text.includes("login") ||
    text.includes("logar") ||
    text.includes("logado")
  ) {
    result = "usuarios";
  } else if (
    text.includes("pagamento") ||
    text.includes("payment") ||
    text.includes("cartoês") ||
    text.includes("cartão") ||
    text.includes("debito") ||
    text.includes("credito")
  ) {
    result = "pagamentos";
  } else if (
    text.includes("segurança") ||
    text.includes("security") ||
    text.includes("seguranca") ||
    text.includes("garantias") ||
    text.includes("garantia") ||
    text.includes("vida")
  ) {
    result = "seguranças";
  } else {
  result = "Erro"
  }
  return result;
};
