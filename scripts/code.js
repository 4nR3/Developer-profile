/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
      let nombre,anio,ciudad,leGustaJs;

      nombre = prompt("Ingrese su nombre por favor:");
      anio = prompt("Ingrese su año de nacimiento :");
      ciudad = prompt("Ingrese su ciudad de residencia actual:");
      leGustaJs = confirm ("¿Le gusta JavaScript?")

    datosPersona.nombre=nombre;
    datosPersona.edad= 2021-anio;

    if(datosPersona.edad>=2021 || datosPersona.edad<0 || isNaN(datosPersona.edad))
      datosPersona.edad=0;

    datosPersona.ciudad=ciudad;
    datosPersona.interesPorJs= leGustaJs? "Si":"No";

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombreHTML = document.getElementById("nombre");
  nombreHTML.innerText=datosPersona.nombre;

  let edadHTML = document.getElementById("edad");
  edadHTML.innerText=datosPersona.edad;

  let ciudadHTML = document.getElementById("ciudad");
  ciudadHTML.innerText=datosPersona.ciudad;

  let leGustaJsHTML = document.getElementById("javascript");
  leGustaJsHTML.innerText=datosPersona.interesPorJs;

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let cajaMaterias = document.getElementById("fila");

  cajaMaterias.innerHTML="";

  for(let f=0;f<listado.length;f++)
    {
      let imgUrl = listado[f].imgUrl;
      let lenguajeDeMateria = listado[f].lenguajes;
      let bimestre = listado[f].bimestre;

      const insertarMateria1 = `<div class="caja"> 
      <img src= ${imgUrl} alt= ${lenguajeDeMateria}> 
      <p class= "lenguajes" > Lenguajes: ${lenguajeDeMateria}</p>
      <p class= "bimestre"> Bimistre: ${bimestre}</p>
      </div>`;

      cajaMaterias.innerHTML+=insertarMateria1;
    }


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  
  let elementosACambiarElColor = document.getElementById("sitio");
  
  elementosACambiarElColor.classList.toggle("dark");


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let ocultoBool=false;

window.addEventListener("keypress",function(letraPulsada){
    
  let miLetra=letraPulsada.code;
  let claseOculta=document.getElementById("sobre-mi");
      
   if(miLetra=="KeyF")
    {
      if(ocultoBool==false)
        {claseOculta.classList.remove("oculto");
        ocultoBool=true;}
      else
        {claseOculta.classList.add("oculto");
        ocultoBool=false}
    }  

  });
  