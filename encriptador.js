// Variables globales ---------------------------------------

const desencrip = {
    ai: "a",
    b: "b",
    c: "c",
    d: "d",
    enter: "e",
    f: "f",
    g: "g",
    h: "h",
    imes: "i",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
    n: "n",
    ober: "o",
    p: "p",
    q: "q",
    r: "r",
    s: "s",
    t: "t",
    ufat: "u",
    v: "v",
    w: "w",
    x: "x",
    y: "y",
    y: "z",
    ' ':' '
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
  ' ':' '
};

let textarea = document.getElementById("text-ingreso");
let buttonEncriptar = document.getElementById("btn-encriptar");
let buttonDesencriptar = document.getElementById("btn-desencriptar");
let divSalida = document.getElementById("text-salida");

    //array para obtener y codificar el texto

// Funciones -------------------------------

function prueba() {
  alert("funciono");
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
  for (let i = 0; i < arg.length; i++) {
    for (prop in encrip) {
      if (prop == arg[i]) {
        arr.push(encrip[prop]);
      }
    }
  }
  console.log(arr.join(''));
  return divSalida.innerHTML = arr.join("");
}

function mostrarConsola(arg) {
  console.log(arg);
}

function mostrarDibujo(){
    let sinTexto = document.getElementById("sin-texto");
    let conTexto = document.getElementById("con-texto");
    if(textarea.value===''){
        sinTexto.style.display = "flex";
        conTexto.style.display = "none";
    }
}

// Eventos ---------



buttonEncriptar.addEventListener("click",cambioDisplay);
textarea.addEventListener("keyup",mostrarDibujo);
