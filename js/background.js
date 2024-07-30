/* Made with the help of the Online Tutorials video: https://www.youtube.com/watch?v=fDSd2fudits&t=167s */

document.addEventListener('DOMContentLoaded', () => {
    function generarEstructura() {
        // Seleccionamos el elemento #background
        var background = document.getElementById('background');

        // Iteramos para crear las filas
        for (var i = 0; i < 25; i++) {
            // Creamos un elemento div para cada fila
            var fila = document.createElement('div');
            fila.className = 'row';

            // Creamos dos divs dentro de cada fila
            for (var j = 0; j < 2; j++) {
                var columna = document.createElement('div');
                fila.appendChild(columna);

                // Creamos 10 elementos <i> dentro de cada div columna
                for (var k = 0; k < 25; k++) {
                    var icono = document.createElement('i');
                    columna.appendChild(icono);
                    let iconClass = k % 5;
                    switch (iconClass) {
                        case 0:
                            icono.classList.add('fa-solid', 'fa-gamepad');
                            break;
                        case 1:
                            icono.classList.add('fa-solid', 'fa-code');
                            break;
                        case 2:
                            icono.classList.add('fa-solid', 'fa-puzzle-piece');
                            break;
                        case 3:
                            icono.classList.add('fa-solid', 'fa-ghost');
                            break;
                        case 4:
                            icono.classList.add('fa-solid', 'fa-dragon');
                            break;
                        default:
                            icono.classList.add('fa-solid', 'fa-gamepad');
                            break;
                    }
                    icono.setAttribute('aria-hidden', 'true');
                }
            }

            // Agregamos la fila completa al elemento #background
            background.appendChild(fila);
        }
    }

    // Llamamos a la función para generar la estructura al cargar la página
    generarEstructura();

});