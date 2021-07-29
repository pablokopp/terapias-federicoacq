function busqueda(){
  var  h2, filter, blogs, input, txtValue, i, textoFallido;

  input =  document.getElementById('miBusqueda');
  filter = input.value.toUpperCase();
  blogs = document.getElementsByClassName('blog_art');
  textoFallido = document.getElementById('busquedaFallida')

  
  for (i=0; i < blogs.length; i++){
    h2 = blogs[i].getElementsByClassName('myH2')[0];
    txtValue = h2.textContent || h2.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1){
      blogs[i].classList.remove('filterOff')
    } 
    else {
      blogs[i].classList.add('filterOff')
    }
    // if(blogs.classList.contains('filterOff').length === blogs.lenght)){
    //   textoFallido.innerHTML = `No se encontró la palabra ${filter}, proba con otra`
    // }
  }

  // falloBusqueda ()
}

function falloBusqueda (){
  textoFallido = document.getElementById('busquedaFallida')
  textoFallido.innerHTML = 'pedito'

}


// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }


  // CODIGO HTML QUE FUNCIONABA

  // <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names..">

  // <ul id="myUL">
  // <li><a href="#">Chakras
  //     <img src="imagenes/blog/1 chakra.jpg" alt="chrakra1">
  // </a></li>
  // <li><a href="#">Mudras
  //     <img src="imagenes/blog/2 chakra.jpg" alt="">
  // </a></li>
  // <li><a href="#">Capas del Cuerpo
  //     <img src="imagenes/blog/3 chakra.jpg" alt="">
  // </a></li>
  // <li><a href="#">Elementos
  //     <img src="imagenes/blog/4 chakra.jpg" alt="">
  // </a></li>
  // <li><a href="#">Fuego
  //     <img src="imagenes/blog/5 chakra.jpg" alt="">
  // </a></li>
  // <li><a href="#">Aire
  //     <img src="imagenes/blog/6 chakra.jpg" alt="">
  // </a></li>

  // </ul>
