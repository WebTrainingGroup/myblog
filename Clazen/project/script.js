
let ref_num = 1;
document.getElementById('change_bg_btn').addEventListener('click', ()=>
{
        if(ref_num){
            document.getElementById('discolored_id').classList.add('discolored_box');
        }
        else{
            document.getElementById('discolored_id').classList.remove("discolored_box");
        }
    ref_num = !ref_num ;    
}
);

