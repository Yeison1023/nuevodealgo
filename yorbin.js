
const inputElement = document.querySelector('#input-tarea');  // el # significa que busca por id 
const btnAgregar = document.querySelector('#btn-agregar');
const listaElement = document.querySelector('#lista-tareas');

btnAgregar.addEventListener('click', () => {
    const textoTarea = inputElement.value;  // value obtiene lo que el usuario escribió en el input

    if (textoTarea.trim() !== '') {   // trim sirve para que en la lista aparezca texo y se tenga que escribir algo 
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = textoTarea;
        nuevaTarea.classList.add('tarea');
        nuevaTarea.addEventListener('click', () => {   // es para que al momento de seleccionar la tarea se marque como completa (toggle)
            nuevaTarea.classList.toggle('completada');
        });
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'X';
        btnEliminar.classList.add('btn-eliminar');
        btnEliminar.addEventListener('click', (evento) => {
            evento.stopPropagation(); 
            nuevaTarea.remove();
        });
        nuevaTarea.appendChild(btnEliminar);
        listaElement.appendChild(nuevaTarea);
        inputElement.value = '';
    }
});
