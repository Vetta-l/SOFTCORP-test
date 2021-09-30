let nav = document.querySelector('.nav');

nav.addEventListener('click',  function(e){
    e.stopPropagation();
    this.classList.toggle('nav--show');
     
});


window.addEventListener('resize', function(event){
    if(document.documentElement.clientWidth > 767){ 
        nav.classList.remove('nav--show');
    } 
  });

  

 document.onclick = function(e){ 
    if ( event.target.className != 'nav--show' ) { 
        nav.classList.remove('nav--show');
    };
};