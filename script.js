// Función para encriptar el texto
function encryptText() {
    let text = document.getElementById('input-text').value;
    let encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = encryptedText;
}

// Función para desencriptar el texto
function decryptText() {
    let text = document.getElementById('input-text').value;
    let decryptedText = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = decryptedText;
}

// Función para copiar el texto encriptado/desencriptado
function copyText() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
}

// Asociar funciones a los botones
document.getElementById('encrypt-btn').addEventListener('click', encryptText);
document.getElementById('decrypt-btn').addEventListener('click', decryptText);
document.getElementById('copy-btn').addEventListener('click', copyText);
