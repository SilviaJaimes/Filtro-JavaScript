export default function renderCiudades(data){
    let cardRegistroCiudad = document.querySelector("#cardRegistroCiudad");

    cardRegistroCiudad.innerHTML = "";

    data.forEach((Ciudades) => {
        let div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card" id="edicion-cards">
                <div class="card-body texto-cards" id="${Ciudades.id}">
                    <img src="${Ciudades.imagen} " class="card-img-top" alt="Imagen de la ciudad">
                    <center>
                    <p><strong>${Ciudades.nomCiudad} </strong></p>
                    </center>
                    <p><strong>Id de la ciudad: </strong> ${Ciudades.id} </p>
                    <p><strong>Id del departamento: </strong> ${Ciudades.departamentoId} </p>
                    <center>
                        <input type="submit" data-accion="eliminar" value="Eliminar" class="btn btn-danger" id="eliminar">
                        <input type="button" data-bs-toggle="modal" data-bs-target="#modalCiudades"  data-accion="actualizar" value="Actualizar" class="btn btn-primary" id="actualizarCiudad">    
                    </center>
                </div>
            </div>
        `;

        cardRegistroCiudad.appendChild(div);
    });
}