import { getDepartamentos, postDepartamentos, deleteDepartamentos, putDepartamentos, getInfoDepartamentos, postCiudad, getCiudad, deleteCiudad, putCiudad, getInfoCiudad } from "./peticion.js";

/* Departamentos */
let form = document.querySelector("#form");
let tbodyRegistro = document.querySelector("#tbodyRegistro");
let nomDepartamento2 = document.querySelector("#nomDepartamento2");
let formActualizar = document.querySelector('#formActualizar');

/* Ciudad */
let form2 = document.querySelector("#form2");
let cardRegistroCiudad = document.querySelector("#cardRegistroCiudad");
let nomCiudad2 = document.querySelector("#nomCiudad2");
let imagen2 = document.querySelector("#imagen2");
let formActualizarCiudad = document.querySelector("#formActualizarCiudad");

getDepartamentos();
getInfoDepartamentos();
getCiudad();
getInfoCiudad();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let accion = e.submitter.dataset.accion

    if (accion === "registrar"){
        postDepartamentos(data)
        form.reset();
    }
});

getDepartamentos();

tbodyRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    let tr = e.target.closest("tr");
    let id = tr.id;
    let accion = e.target.dataset.accion;
    
    if(accion === "eliminar"){
        deleteDepartamentos(tr,id);
        tr.remove();
    }
    else if(accion === "actualizar"){
        let tr2 = e.target.parentElement.parentElement.childNodes[3].innerText;
        nomDepartamento2.value = tr2;

        formActualizar.addEventListener("submit", (e) => {
            e.preventDefault();

            let data = Object.fromEntries(new FormData(e.target));

            putDepartamentos(data, id);
        });
    }
});

getDepartamentos();

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let accion = e.submitter.dataset.accion

    if (accion === "registrarCiudad"){
        postCiudad(data);
        form2.reset();
    }
});

cardRegistroCiudad.addEventListener('click', (e) => {
    e.preventDefault();
    let div = e.target.closest("div");
    let id = div.id;
    let accion = e.target.dataset.accion;
    
    if(accion === "eliminar"){
        deleteCiudad(div, id);
        div.remove();
    }
    else if(accion === "actualizar"){
        let div = e.target.parentElement.parentElement.childNodes[3].innerText;
        nomCiudad2.value = div;

        let div2 = e.target.parentElement.parentElement.childNodes[1].innerText;
        imagen2.value = div2;

        formActualizarCiudad.addEventListener("submit", (e) => {
            e.preventDefault();

            let data = Object.fromEntries(new FormData(e.target));

            putCiudad(data, id);
        });
    }
});

getCiudad();