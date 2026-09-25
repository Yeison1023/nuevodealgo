
const inputElement = document.querySelector('#input-tarea');
const btnAgregar = document.querySelector('#btn-agregar');
const listaElement = document.querySelector('#lista-tareas');

btnAgregar.addEventListener('click', () => {
    const textoTarea = inputElement.value;

    if (textoTarea.trim() !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = textoTarea;
        nuevaTarea.classList.add('tarea');
        nuevaTarea.addEventListener('click', () => {
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
