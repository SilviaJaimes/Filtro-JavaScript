function cambiarTema(miTema) {
    let customTheme = document.getElementById('customTheme');

    if (miTema === 'light') {
        customTheme.textContent = `
            body {
                background-color: #ffffff;
                color: #333;
            }
            .container-fluid, #offcanvasNavbar {
                background-color: #d0d0d0;
            }
            .navbar-toggler {
                border-color: #000;
            }
            .bi-list {
                color: #000;
            }
            .navbar-brand {
                color: #3377a4;
            }
            .navbar-brand:hover {
                color: #1c3e55c2;
            }
            #ingresarDepartamentos, #ingresarCiudades {
                color: #000;
            }
            #ingresarDepartamentos:hover, #ingresarCiudades:hover {
                color: #000000a1;
            }
            #claro, #oscuro, #cambiar {
                background-color: #d0d0d0;
                color: #000;
                box-shadow: 0px 2px 2px #000;
            }
            #claro:hover, #oscuro:hover, #cambiar:hover {
                background-color: #000000cb;
                color: #ffffff;
            }
            .card {
                background-color: #d0d0d0;
            }
            .card-body {
                color: #000;
            }
            #ubi:hover {
                background-color: #000;
                border-color: #000;
                color: #fff;
            }
            #arrow {
                color: #000;
            }
            .mapouter{
                background-color: #d0d0d0;
            }
            .info {
                background-color: #d0d0d0;
                color: #000;
            }
            #redes {
                color: #000;
            }
            .subtitulosPie {
                color: #3377a4;
            }
            .formulario {
                background-color: #d0d0d0;
                color: #000;
            }
            
            .formulario2 {
                background-color: #d0d0d0;
            }
            
            .formulario3 {
                background-color: #d0d0d0;
                color: #000;
            }
            
            .formulario4 {
                background-color: #11131a;
            }
            #edicion-cards {
                background-color: #d0d0d0;
            }
            
            .texto-cards {
                color: #000;
            }
        `;
    } else if (miTema === 'dark') {
        customTheme.textContent = `
            body {
                background-color: #333;
                color: #f4f4f4;
            }
        `;
    }

    localStorage.setItem('theme', miTema);
}

function shiftTema () {
    let currentTheme = localStorage.getItem('theme') || 'dark';
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    cambiarTema(newTheme);
}

let savedTheme = localStorage.getItem('theme')||'dark';

if (savedTheme) {
    cambiarTema(savedTheme);
}