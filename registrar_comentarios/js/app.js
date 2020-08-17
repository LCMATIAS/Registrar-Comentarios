//Variables Globales
const txtUsuarioUI = document.querySelector("#txtUsuario");
const txtComentarioUI = document.getElementById("txtComentario");
const tabla = document.getElementById("tableComentarios");

const hideOperaccion = document.getElementById("Operacion");
const hideSel = document.getElementById("IdSelec");



function registrarComentario(){
    
    if (hideOperaccion.value == 'I'){
      var fila = tabla.insertRow(1);
      var col1 = fila.insertCell(0); //Columna Usuario
      var col2 = fila.insertCell(1); //Columna Comentario
      var col3 = fila.insertCell(2); //Columna Fecha
      var col4 = fila.insertCell(3); //Columna Opción
    
      //Agregar los Valores en las columnas
      col1.innerHTML = txtUsuarioUI.value;
      col2.innerHTML = txtComentarioUI.value;
      //Fecha
      col3.innerHTML = '05/11/2018';
      //Opción
      col4.innerHTML = '<button type="button" class="borrar-comentario btn btn-danger btn-sm" onclick="borrarComentario(this);">X</button> <button type="button" class="btn btn-primary btn-sm" onclick="comentarioToInput(this);">...</button>';    
    }else{
        updateComentario();
    }
    
    limpiarCampos();
    
}

function borrarComentario(prmBorrar) {
    
    var filaEliminar = prmBorrar.parentNode.parentNode;
    filaEliminar.parentNode.removeChild(filaEliminar);
    
}

function comentarioToInput(prmComentario){
    
    var filaSelec = prmComentario.parentNode.parentNode;
    hideSel.value = filaSelec.rowIndex; //Obtengo el indice de la fila
    
    txtUsuarioUI.value = tabla.rows[filaSelec.rowIndex].cells[0].innerHTML;
    txtComentarioUI.value = tabla.rows[filaSelec.rowIndex].cells[1].innerHTML;
    hideOperaccion.value ='U'; //Se va a editar

}

function updateComentario(){
        
    tabla.rows[hideSel.value].cells[0].innerHTML = txtUsuarioUI.value;
    tabla.rows[hideSel.value].cells[1].innerHTML = txtComentarioUI.value;

}

function limpiarCampos(){
    
    txtUsuarioUI.value='';
    txtComentarioUI.value='';
    hideOperaccion.value ='I';
    hideSel.value ="";
    
}