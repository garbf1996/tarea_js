//Variable
const resultado = document.querySelector('#resulatdonota');
const formulario = document.querySelector('#contactForm');
const BTNenviar = document.querySelector('#BTNenviar');
//Areglo de objetos
let contenidos = [];

eventos();
//Eventos
function eventos (){
  formulario.addEventListener('submit', validar);
  document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('contenidos')){
      //Recuperar datos de localStorage
      contenidos = JSON.parse(localStorage.getItem('contenidos'));
      creacionHTML();
    }
  });
}

//Validaciones
function validar(e){
  e.preventDefault();
  const nombre_estudiante = document.querySelector('#nombre_estudiante').value;
  const nota_final = document.querySelector('#nota_final').value;
  //Validaciones de campos
  if(nombre_estudiante === '' || nota_final === ''){
    alert('Todos los campos son obligatorios');
    return;
  
  }



  //Creacion de objeto
  inforData = {
    id:Date.now(),
    nombre_estudiante: nombre_estudiante,
    nota_final: nota_final,
  }

//Agregar objeto al arreglo
  contenidos = [...contenidos, inforData];
  creacionHTML();
}
//Creacion de HTML
function creacionHTML() {
  limpaiHTML();
  contenidos.forEach(element => {
    //Creacion de elementos
    const img = document.createElement('img');
  if(element.nota_final >= 90){
   img.style.width = '50px'
    img.src = 'https://cdn-icons.flaticon.com/png/512/2584/premium/2584606.png?token=exp=1657554334~hmac=d2e6d33d4b9698799d24b8f11075a421';
        
  }else if(element.nota_final >= 80){
    img.style.width = '50px'
    img.src = 'https://cdn-icons-png.flaticon.com/512/742/742923.png' 
   
  }else if(element.nota_final >= 70){
    img.style.width = '50px'
    img.src = 'https://cdn-icons-png.flaticon.com/512/742/742774.png' 

  }else if(element.nota_final <= 69){
    img.style.width = '50px'
    img.src = 'https://cdn-icons-png.flaticon.com/128/599/599502.png'
  }
//Creacion de elementos
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${element.nombre_estudiante}</td>
  <td>${element.nota_final}</td>
  <td>${img.outerHTML}</td>
  `;
  //Agregar elementos
  resultado.appendChild(row,img);
  });

localStorageAPP();
//Limpiar formulario
  formulario.reset();

}

function limpaiHTML(){
  //Limpiar elementos
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
  }
}

//Guardar en localStorage
function localStorageAPP(){
  localStorage.setItem('contenidos', JSON.stringify(contenidos));
  
}
