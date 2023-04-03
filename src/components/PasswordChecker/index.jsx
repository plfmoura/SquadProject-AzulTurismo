import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres";
    }

    if (!/\d/.test(password)) {
      return "A senha deve conter pelo menos um número";
    }

    if (!/[A-Z]/.test(password)) {
      return "A senha deve conter pelo menos uma letra maiúscula";
    }

    if (!/[a-z]/.test(password)) {
      return "A senha deve conter pelo menos uma letra minúscula";
    }

    return "Senha forte!";
  };

  const handleCheckPassword = () => {
    const result = checkPasswordStrength(password);
    setMessage(result);
  };

  return (
    <div>
    <input type="password" value={password} onChange={handleChange} />
    </div>
  );
}

export default PasswordChecker;