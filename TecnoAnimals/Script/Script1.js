
document.addEventListener("keyup",(e)=>{
    locationLogin(e)
    locationIndex(e)
    // pagina que no se blanquee
    location.href(e) = locationIndex(e);


})
//Pagina inicial a Login 
const locationLogin=(e)=>{
    if(e.ctrlKey && e.key==="1"){
        console.log("Abriendo Ventana Login")
        window.location.assign("../HTML/Login.html")
        return
    }
}
//Pagina Login a Inicial
const locationIndex=(e)=>{
    if(e.ctrlKey && e.key==="2"){
        console.log("Volviendo al Inicio")
        window.location.assign("../HTML/Index.html")
        return
    }
}
//ResponsiveNav
const btn_nabvar=document.getElementById('btn_nabvar')
const navbar=document.getElementById('nabvar')
const icon=document.getElementById('icon')

btn_nabvar.addEventListener('click',()=>{
    navbar.classList.toggle('change_height')
    icon.classList.contains('fa-bars') ? icon.classList.replace('fa-bars','fa-times') : icon.classList.replace('fa-times','fa-bars')
})

//PandaLogin
$('#password').focusin(function(){
    $('form').addClass('up')
  });
  $('#password').focusout(function(){
    $('form').removeClass('up')
  });
  
  // Panda Eye move
  $(document).on( "mousemove", function( event ) {
    var dw = $(document).width() / 15;
    var dh = $(document).height() / 15;
    var x = event.pageX/ dw;
    var y = event.pageY/ dh;
    $('.eye-ball').css({
      width : x,
      height : y
    });
  });
  
  // validation
  
  
  $('.btn').click(function(){
    $('form').addClass('wrong-entry');
      setTimeout(function(){ 
         $('form').removeClass('wrong-entry');
       },3000 );
  });
