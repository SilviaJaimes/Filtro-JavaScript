export default function renderizarDepartamentos (data){
    let selectDepartamento = document.querySelector("#selectDepartamento");

    selectDepartamento.innerHTML = "";

    let option = document.createElement("option");
    option.innerText = "Seleccione el departamento";
    selectDepartamento.appendChild(option);

    data.forEach((Departamentos) => {
        let option = document.createElement("option");
        option.setAttribute("value", `${Departamentos.id}`);
        option.innerHTML = `
            ${Departamentos.nomDepartamento}
        `;

        selectDepartamento.appendChild(option);
    });
}