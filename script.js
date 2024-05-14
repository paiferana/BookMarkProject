function validarFormulario() {
    var senha = document.getElementById("password").value;
    var confirmarSenha = document.getElementById("confirm-password").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return false;
    }
    return true;
}