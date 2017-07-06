function PostView(){
  $('.new_post').on('submit', function(event){
    event.preventDefault()
    // alert('CATH')

  var isValid = true
  var errores = ""


   var ptitle = $('#post_title').val().length
   var pcontent = $('#post_content').val().length


    if (ptitle === 0 || ptitle > 20) {
      errores += "Error en el Título"; 
      isValid = false;
    }

    if (pcontent === 0 || pcontent > 500) {
      errores += ', Error en el Mensaje'; 
      isValid = false;
    }
  
  if (!isValid) {
    alert(errores)
  }

  })





}
