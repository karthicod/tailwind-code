function menuclick(){
    var menu = document.getElementById('mobilemenu');
   console.log(menu.classList);
   if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
   }
   else{
    menu.classList.add('hidden');
   }
}