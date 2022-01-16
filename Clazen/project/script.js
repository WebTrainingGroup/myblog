
let bar_toggle = 0;
document.getElementById("bar_svg").addEventListener('click', () => {
    if(bar_toggle){
        document.getElementById("bar_menu").classList.add("d-none");
    }
    else{
        document.getElementById("bar_menu").classList.remove("d-none");
    }

    bar_toggle = !bar_toggle;
});




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








