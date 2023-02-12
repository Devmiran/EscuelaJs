/* const myModal = new bootstrap.Modal('#crearPerson', {
    keyboard: false
});  */


const tbody=document.getElementById("tbody");
const nombre= document.getElementById('nombre');
const curso= document.getElementById('curso');
const genero= document.getElementById('genero');
const nota1= document.getElementById('nota1');
const nota2= document.getElementById('nota2');
const nota3= document.getElementById('nota3');
/* const promedio=document.getElementById('promedio'); */
const index= document.getElementById('mostrar');





let estudiantes=[]


//Accion del boton 'MOSTRAR'
index.addEventListener('click', ()=>{
let promedio = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3; 
estudiantes.push({nombre:nombre.value,curso:curso.value,genero:genero.value,nota1:nota1.value, nota2:nota2.value, nota3:nota3.value, promedio});

//Cuerpo de la tabla
tbody.textContent = '';
estudiantes.forEach(estudiante => {
    const tr = document.createElement('tr');
    tr.style.backdropFilter = 'blur(10px)';
    const tdnombre = document.createElement('td');
    const tdcurso = document.createElement('td');
    const tdgenero = document.createElement('td');
    const tdnota1 = document.createElement('td');
    const tdnota2 = document.createElement('td');
    const tdnota3 = document.createElement('td');
    const tdpromedio =document.createElement('td')
    tdnombre.textContent = estudiante.nombre;
    tdcurso.textContent = estudiante.curso;
    tdgenero.textContent = estudiante.genero;
    tdnota1.textContent = estudiante.nota1;
    tdnota2.textContent = estudiante.nota2;
    tdnota3.textContent = estudiante.nota3;
    tdpromedio.textContent = estudiante.promedio
    tr.appendChild(tdnombre);
    tr.appendChild(tdcurso);
    tr.appendChild(tdgenero);
    tr.appendChild(tdnota1);
    tr.appendChild(tdnota2);
    tr.appendChild(tdnota3);
    tr.appendChild(tdpromedio);
    
    tbody.appendChild(tr);

    
    

    
});

/*   myModal.hide() */

});
