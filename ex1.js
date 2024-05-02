let username = prompt("Digite um nome de usuário:")
let senha = prompt("Digite a senha:")

if (username == "admin" && senha == "senha123") {
    console.log("Login bem sucedido");
}
else {
    console.log("Você não tem permissão de acesso!")
}