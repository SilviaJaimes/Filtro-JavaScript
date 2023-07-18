export default function renderSelectDepartamentos(data){
    let selectDepartamento2 = document.querySelector("#selectDepartamento2");

    selectDepartamento2.innerHTML = "";

    let option = document.createElement("option");
    option.innerText = "Seleccione el departamento";
    selectDepartamento2.appendChild(option);

    data.forEach((Departamentos) => {
        let option = document.createElement("option");
        option.setAttribute("value", `${Departamentos.id}`);
        option.innerHTML = `
            ${Departamentos.nomDepartamento}
        `;

        selectDepartamento2.appendChild(option);
    });
}