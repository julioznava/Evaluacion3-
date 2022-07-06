function validar() {
    console.log("entro");
    let nombre = document.formulario.txt_nombre.value;
    let rut = document.formulario.txt_rut.value;
    let direccion = document.formulario.txt_direccion.value;
    let sucursal = document.formulario.opt_sucursal.value;
    let correo = document.formulario.txt_correo.value;
    let producto = document.formulario.opt_producto.value; 
    let telefono = document.formulario.txt_telefono.value;
    console.log(nombre);
    
    if ((telefono.charAt(0)!='9') || (telefono.length!=9)  )
    {

         alert("numero de telefono debe empezar con 9 y tener 9 digitos");
         document.formulario.txt_telefono.focus();
         return false;  
    }
     if (nombre.length== 0 )
     {
       alert("Ingrese un Nombre Valido ");
       document.formulario.txt_nombre.focus();
       return false;
     }
     if (parseInt(rut)>9 && parseInt(rut)<10 || rut.indexOf('-')<0 || rut.indexOf('.')>1 )
     {
       alert ("Su rut debe tener 9 a 10 numeros");
       document.formulario.txt_rut.focus();
       return false;
     }
     if (direccion.length==0)
     {
       alert("Debe ingresar una Direccion Valida");
       document.formulario.txt_direccion.focus();
       return false;
     }
     if (sucursal.length== 0 )
     {
       alert("Seleccione una Sucursal Valida");
       document.formulario.opt_sucursal.focus();
       return false;
     }
     if (correo.length < 4 )
     {
        alert("Ingrese un correo Valido");
        document.formulario.txt_correo.focus();
        return false;

     }
     if (producto.length==0 )
     {
        alert("Debe Seleccionar un Producto");
        document.formulario.opt_producto.focus();
        return false;

     }
    
   alert("Todo Correcto!!"+nombre+" "+producto+ " "+correo+" "+sucursal+" "+rut+" "+direccion+" "+telefono);
   //si esta todo bien ingresado con esto le digo envie los datos al siguiente lugar
   document.formulario.action = "pagina.php";
   document.formulario.submit()= true;
}