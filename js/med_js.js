
/*FUNCIÓN LOGIN */

function pasuser(form) {
    if (form.id.value=="margarita" && form.pass.value=="1234") { 
                
        location="privada_paciente.html" 
      } 
    
    else if (form.id.value=="dra.elizabeth" && form.pass.value=="4321") { 
                
        location="index.html" 
      } 

    else {
        alert("Datos incorrectos, por favor vuelve a intentar")
      }
  
  }