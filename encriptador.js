// Variables globales ---------------------------------------

const desencrip = {
    'ai': 'ai',
    'enter': "e",
    'imes': "i",
    'ober': "o",
    'ufat': "u"
  };

const encrip = {
  a: "ai",
  b: "b",
  c: "c",
  d: "d",
  e: "enter",
  f: "f",
  g: "g",
  h: "h",
  i: "imes",
  j: "j",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  o: "ober",
  p: "p",
  q: "q",
  r: "r",
  s: "s",
  t: "t",
  u: "ufat",
  v: "v",
  w: "w",
  x: "x",
  y: "y",
  y: "z",
  ' ':' ',
  0:'0',
  1:'1',
  2:'2',
  3:'3',
  4:'4',
  5:'5',
  6:'6',
  7:'7',
  8:'8',
  9:'9'
};


let textarea = document.getElementById("text-ingreso");
let buttonEncriptar = document.getElementById("btn-encriptar");
let buttonDesencriptar = document.getElementById("btn-desencriptar");
let buttonCopiar = document.getElementById("btn-copiar");
let divSalida = document.getElementById("text-salida");

let expresion = /@|\$|%|\(|\)|#|&|"|!|\||°|\-|_|\*|\+|\.|\^/;


// Funciones -------------------------------

function soloMinuscula(){
    let mensaje = textarea.value;

    if(mensaje === mensaje.toLowerCase()){
        console.log('true');
        return true;
    }else{
        console.log('false');
        return false;
    }
}

function sinEspecial(){
    let mensaje = textarea.value;
    let = prueba =expresion.test(mensaje)
    if(!prueba)  {
        return true;
    }else{
        return false;
    }
}



function mensajeMinuscula(){
    alert('Por favor Ingrese letras en minusculas y sin caracteres especiales.');
}



function cambioDisplay() {
  let sinTexto = document.getElementById("sin-texto");
  let conTexto = document.getElementById("con-texto");

  if (sinTexto.style.display != "none") {
    sinTexto.style.display = "none";
    conTexto.style.display = "flex";
  } 
}

function encriptar(arg) {
  let arr = [];
  if(soloMinuscula()&&sinEspecial()){
    for (let i = 0; i < arg.length; i++) {
        for (prop in encrip) {
          if (prop == arg[i]) {
            arr.push(encrip[prop]);
          }
        }
      }
      cambioDisplay();
      return divSalida.innerHTML = arr.join("");
  }else{
    mensajeMinuscula();
  }
  
}

function desencriptar(arg) {
    let texto = textarea.value;
    if(soloMinuscula()&& sinEspecial()){
        let textoSalida = texto
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");

        cambioDisplay();
        return divSalida.innerHTML = textoSalida;
    }else{
        mensajeMinuscula();
    }

  }

  function mostrarDibujo(){
    let sinTexto = document.getElementById("sin-texto");
    let conTexto = document.getElementById("con-texto");
    if(textarea.value===''){
        sinTexto.style.display = "flex";
        conTexto.style.display = "none";
    }
}


function copiarTexto(){
    let texto = document.getElementById("text-salida");
    texto.select();
    document.execCommand("copy");
    textarea.value = '';
}


function mostrarConsola() {
    let texto = document.getElementById("text-salida").innerText;
}


desencriptar('enter')
// Eventos ---------



buttonEncriptar.addEventListener("click",mostrarDibujo);
buttonEncriptar.addEventListener("click",sinEspecial);

buttonDesencriptar.addEventListener("click",cambioDisplay);
buttonDesencriptar.addEventListener("click",mostrarDibujo);

buttonCopiar.addEventListener("click",copiarTexto);

textarea.addEventListener("keyup",mostrarDibujo);
