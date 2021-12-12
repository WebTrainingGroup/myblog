
let ref_num = 0;
document.getElementById('change_bg_btn').addEventListener('click', ()=>
{
        if(ref_num){
            document.getElementById('body').innerHTML="";
        }
        else{
            document.getElementById('body').classList.remove("change_bg");
        }
    ref_num = !ref_num ;    
}
);

