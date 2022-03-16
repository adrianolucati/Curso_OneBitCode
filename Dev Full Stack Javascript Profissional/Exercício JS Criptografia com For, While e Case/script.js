var password = '0'
var confirmPass = '1'
var option = 0
var msgOriginal = ''
var msgCripto = ''
var msgCriptoFinal = ''

var labelMensagemCod = document.querySelector(".mensagemCodificada")



while (option != 1 && option != 2) {
    option = prompt("O que deseja fazer?\n\n1 - Criptografar\n2 - Descriptografar")
}
//Laço para validar a senha
switch (option) {
    case "1":
        while (password != confirmPass) {
            password = '0';
            while (password.length < 5) {
                password = prompt("Crie uma senha para criptografar\n(mínimo 5 caractéres)");
                (password.length < 5 ? alert("Crie uma senha com pelo menso 5 caractéres") : console.log("senha > 5 carat"));
            }
            confirmPass = prompt("Digite a senha novamente para confirmar");

            (password != confirmPass ? alert("As senhas não conferem!") : alert("Senha configurada!"));
        }
        while (msgOriginal == null || msgOriginal == 0) {
            msgOriginal = prompt("Digite sua mensagem secreta:")
            console.log(msgOriginal.length)
        }
        break;
    case "2":
        while (password.length < 5) {
            password = prompt("Digite a senha de descriptografia");
            (password.length < 5 ? alert("## Esta não é uma senha válida##") : console.log(password.length + ' caracteres'));
        }
        while (msgCriptoFinal == null || msgCriptoFinal == 0) {
            msgCriptoFinal = prompt("Digite sua mensagem secreta:")
            console.log(msgCriptoFinal.length)
        }
        break;
    default:
        break;
}
//Laço para converter a mensagem
switch (option) {
    case "1": // criptografar mensagem
        let p = 0;
        for (let i = 0; i < msgOriginal.length; i++) { // embaralha mensagem com caractéres da senha
            if (msgOriginal[i] == ' '){
                msgCripto+="0";
                console.log("posição espaço");

            }else{
                (msgOriginal[i] < password[p] ? msgCripto+=password[p] : msgCripto+=msgOriginal[i]);
            }
            console.log(`O: ${msgOriginal[i]} | P: ${password[p]} | C:${msgCripto}`);
            (p + 1 < password.length ? p++ : p = 0);
        }
        for (let j = msgCripto.length - 1; j >= 0 ; j = j - 2) { // inverte msgCript e inverte posição letras pares e impares
            (j - 1 >= 0 ? msgOriginal += msgCripto[j - 1] : console.log(msgOriginal));
            msgOriginal += msgCripto[j];
        }
        console.log(msgOriginal);

        labelMensagemCod.value = msgCripto
        break;

    case "2": // descriptografar mensagem
        for (let k = msgCriptoFinal.length - 1; k >= 0 ; k = k - 2) { // inverte msgCript e inverte posição letras pares e impares
            (k - 1 >= 0 ? msgCripto += msgCriptoFinal[k - 1] : console.log(msgCripto));
            msgCripto += msgCriptoFinal[k];
        }
        console.log(msgCriptoFinal);
        let q = 0;
        for (let l = 0; l < msgCriptoFinal.length; l++) { // embaralha mensagem com caractéres da senha
            (msgCripto[l] < password[q] ? msgOriginal+=password[q] : msgOriginal+=msgCripto[l]);
            console.log(`O: ${msgCripto[l]} | P: ${password[q]} | C:${msgOriginal}`);
            (q + 1 < password.length ? q++ : q = 0);
        }
        break;
    default:
        break;
}

// charCodeAt()