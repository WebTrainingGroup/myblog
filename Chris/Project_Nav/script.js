let toggle = 0;

document.getElementById('btn').addEventListener('click', ()=>{
    if(toggle){
        document.getElementById('menu').classList.add('d-none');
       

    }   else{
        document.getElementById('menu').classList.remove('d-none');
        
    } 
    toggle = !toggle;

});