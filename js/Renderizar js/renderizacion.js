export default function renderizacion(data){
    let tbodyRegistro = document.querySelector("#tbodyRegistro");

    tbodyRegistro.innerHTML = "";

    data.forEach((Departamentos) => {
        let tr = document.createElement('tr');
        tr.setAttribute("id", `${Departamentos.id}`);
        tr.setAttribute("class", "tr");

        tr.innerHTML = `
        <td> ${Departamentos.id} </td>
        <td> ${Departamentos.nomDepartamento} </td>
        <td>
            <input type="submit" data-accion="eliminar" value="Eliminar" class="btn btn-danger" id="eliminar">
            <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="actualizar" value="Actualizar" class="btn btn-primary" id="actualizarDepartamento">
        </td>
        `;

        tbodyRegistro.appendChild(tr);
    });
};