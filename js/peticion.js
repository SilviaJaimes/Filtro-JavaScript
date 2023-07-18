import renderizacion from "./Renderizar js/renderizacion.js";
import renderizarDepartamentos from "./Renderizar js/renderizarDepartamentos.js"
import renderCiudades from "./Renderizar js/renderCiudades.js";
import renderSelectDepartamentos from "./Renderizar js/renderSelectDepartamentos.js"

let url = "http://localhost:3000";

let headers = new Headers ({'Content-Type': 'application/json'});

/* Get departamentos */
export async function getDepartamentos(){
    let data = await(await fetch(`${url}/Departamentos`)).json();
    renderizacion(data);
};

/* Post departamentos */
export async function postDepartamentos(data){
    let configuracion = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    };

    let rutas = await(await fetch(`${url}/Departamentos`, configuracion)).json();
};

/* Delete departamentos */
export async function deleteDepartamentos(tr, id){
    let data = Object.fromEntries(new FormData(tr.target));

    let configuracion = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    }

    let ciudades = await(await fetch(`${url}/Ciudades?departamentoId=${id}`)).json();

    for(const ciudad of ciudades){
        let ciudadId = ciudad.id;
        let configuracionCiudad = {
            method: 'DELETE',
            headers: headers
        }

        let delCiudad = await(await fetch(`${url}/Ciudades/${ciudadId}`, configuracionCiudad)).json();
    }

    let del = await(await fetch(`${url}/Departamentos/${id}`, configuracion)).json();
};

/* Put departamentos */
export async function putDepartamentos(data, id){
    let configuracion = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    };

    let act = await(await fetch(`${url}/Departamentos/${id}`, configuracion)).json();
};

/* Información departamento, actualizar */
export async function getInfoDepartamentos(){
    let data = await(await fetch(`${url}/Departamentos`)).json();
    renderizarDepartamentos(data);
};

/* Get ciudades */
export async function getCiudad(){
    let data = await(await fetch(`${url}/Ciudades`)).json();
    renderCiudades(data);
};

/* Post ciudades */
export async function postCiudad(data){
    let configuracion = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    };

    let ciudades = await(await fetch(`${url}/Ciudades`, configuracion)).json();
};

/* Delete ciudades */
export async function deleteCiudad(div, id){
    let data = Object.fromEntries(new FormData(div.target));

    let configuracion = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    };

    let del = await(await fetch(`${url}/Ciudades/${id}`, configuracion)).json();
};

/* Put ciudades */
export async function putCiudad(data, id){
    let configuracion = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    };

    let act = await(await fetch(`${url}/Ciudades/${id}`, configuracion)).json();
};

/* Información ciudades, actualizar */
export async function getInfoCiudad(){
    let data = await(await fetch(`${url}/Departamentos`)).json();
    renderSelectDepartamentos(data);
};