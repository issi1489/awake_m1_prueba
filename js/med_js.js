
/*FUNCIÓN LOGIN */

function pasuser(form) {
    if (form.id.value=="margarita" && form.pass.value=="1234") { 
                
        location="privada_paciente.html" 
      } 
    
    else if (form.id.value=="dra.elizabeth" && form.pass.value=="4321") { 
                
        location="privada_medico.html" 
      } 

    else {
        alert("Datos incorrectos, por favor vuelve a intentar")
      }
  
  }

/*FORMULARIO REGISTRO PACIENTE*/
