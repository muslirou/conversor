function converterTextoLinkText () {
    let texto = String(document.getElementById('texto_converter').value).toLowerCase();    
    let novoTexto = '';
    for (let index = 0; index < texto.length; index++) {
        i = texto[index];
        
        if (i == " " || i == "/" || i == '"' || i == "." || i == "(" || i == ")") {
            i = "--";
        }
        novoTexto += i;
    }
    let campo = document.getElementById('texto_convertido')
    campo.innerHTML = novoTexto;
}

function copiarTexto() {
    let copyText = document.querySelector("#texto_convertido");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);

  function converterTextoMinuscula () {
    let texto = String(document.getElementById('texto_converter').value).toLowerCase();
    let novoTexto = capitalizeFirstLetter(texto);
    let campo = document.getElementById('texto_convertido')
    campo.innerHTML = novoTexto;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  function converterTextoMaiuscula () {
    let texto = String(document.getElementById('texto_converter').value).toUpperCase();
    let campo = document.getElementById('texto_convertido')
    campo.innerHTML = texto;
  }

  function retirarPipe () {
    let texto = document.getElementById('texto_converter').value;    
    let novoTexto = '';
    for (let index = 0; index < texto.length; index++) {
        i = texto[index];
        
        if (i == "|") {
            i = "\n";
        }
        novoTexto += i;
    }
    let campo = document.getElementById('texto_convertido')
    campo.innerHTML = novoTexto;
  }

  function  limparCampos() {
    document.getElementById('texto_converter').value = "";
    document.getElementById('texto_convertido').value = "";
  }