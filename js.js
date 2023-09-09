function activity() {
    const url = 'https://www.boredapi.com/api/activity';
    fetch(url)
        .then(response => response.json())
        .then(actividad => {
            console.log(actividad);
            document.getElementById('queHacer').textContent = actividad.activity; 
            document.getElementById('queHacer').style.visibility = 'visible';
        })
        .catch(error => {
            console.error('Error al obtener actividad:', error);
        });
}

document.getElementById('boton').addEventListener('click', activity);