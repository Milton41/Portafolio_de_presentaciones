(function(){
  var btn=document.querySelector('.dd-btn'),menu=document.getElementById('carreras-menu');
  var burger=document.querySelector('.burger'),nav=document.getElementById('menu');
  function setDD(o){menu.classList.toggle('open',o);btn.setAttribute('aria-expanded',o)}
  btn.addEventListener('click',function(e){e.stopPropagation();setDD(!menu.classList.contains('open'))});
  document.addEventListener('click',function(e){if(!menu.contains(e.target))setDD(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){setDD(false);btn.focus()}});
  burger.addEventListener('click',function(){var o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
})();
