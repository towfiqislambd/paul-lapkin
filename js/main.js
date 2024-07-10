/*====Humburgur Menu========*/
function openMenu() {
  document.getElementById('navbar').style.height = '100vh';
}
function closeMenu() {
  document.getElementById('navbar').style.height = '0';
}

/*====Smooth Scroll========*/
  $('a').on('click',function(event){
      if(this.hash !== ""){
          event.preventDefault();
          var hash = this.hash;
          $('html,body').animate({
              scrollTop: $(hash).offset().top
          },1000,function(){
              return false
              window.location.hash = hash;
          });
      };
  })

/*====Mixitup Plugin========*/
var mixer = mixitup('.grid-work-row');

/*====Scrollify Plugin========*/
$(function() {
  $.scrollify({
    section : ".scrollbtn",
    setHeights: false,
    updateHash: false,
    scrollSpeed: 1000,
  });
});
