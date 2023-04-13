import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordBlur = () => {
    const strengthResult = checkPasswordStrength(password);
    setPasswordMessage(strengthResult);
  };

  const handleConfirmChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleConfirmBlur = () => {
    const matchResult = checkPasswordMatch();
    setConfirmPasswordMessage(matchResult);
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

  const checkPasswordMatch = () => {
    if (password !== confirmPassword) {
      return "As senhas não correspondem";
    }
    return "";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ marginBottom: 15 }}>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} onBlur={handlePasswordBlur} placeholder="Insira sua senha"/>
        <div>{passwordMessage}</div>
      </div>
      
      <div>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmChange} onBlur={handleConfirmBlur} placeholder="Confirme sua senha"/>
        <div>{confirmPasswordMessage}</div>
      </div>
    </div>
  );
}

export default PasswordChecker;
