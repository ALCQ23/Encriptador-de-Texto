function encriptar(){
    let texto = document.getElementById("texto").value
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let encriptado1 = document.getElementById("desencriptado1");


    let textoCifrado = texto
                       .replace(/e/gi,"enter")
                       .replace(/i/gi,"imes")
                       .replace(/a/gi,"ai")
                       .replace(/0/gi,"ober")
                       .replace(/u/gi,"ufat")

if(document.getElementById("texto").value.length !=0) {
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("titulo-mensaje").textContent = "Texto encriptado con exito";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("desencriptado1").src = "./img/encriptado1.jpg";
}else{
    encriptado1.src = "./img/desencriptado1.png";
    alert("Debes de ingresar algun texto");
 }    
}

