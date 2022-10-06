var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["modelo"] = document.getElementById("modelo").value;
    formData["marca"] = document.getElementById("marca").value;
    formData["tipo"] = document.getElementById("tipo").value;
    formData["quantidade"] = document.getElementById("quantidade").value;
	formData["condicao"] = document.getElementById("condicao").value;
	formData["diferenciais"] = document.getElementById("diferenciais").value;
	
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("celulares").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.modelo;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.marca;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.tipo;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.quantidade;
	cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.condicao;
	cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.diferenciais;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Deletar</a>`;
}

function resetForm() {
    document.getElementById("modelo").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("quantidade").value = "";
	document.getElementById("condicao").value = "";
	document.getElementById("diferenciais").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("modelo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("marca").value = selectedRow.cells[1].innerHTML;
    document.getElementById("tipo").value = selectedRow.cells[2].innerHTML;
    document.getElementById("quantidade").value = selectedRow.cells[3].innerHTML;
	document.getElementById("condicao").value = selectedRow.cells[4].innerHTML;
	document.getElementById("diferenciais").value = selectedRow.cells[5].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.modelo;
    selectedRow.cells[1].innerHTML = formData.marca;
    selectedRow.cells[2].innerHTML = formData.tipo;
    selectedRow.cells[3].innerHTML = formData.quantidade;
	selectedRow.cells[4].innerHTML = formData.condicao;
	selectedRow.cells[5].innerHTML = formData.diferenciais;
}

function onDelete(td) {
    if (confirm('Você tem certeza que deseja deletar este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("celulares").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("modelo").value == "") {
        isValid = false;
        document.getElementById("modeloValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("modeloValidationError").classList.contains("hide"))
            document.getElementById("modeloValidationError").classList.add("hide");
    }
    return isValid;
}