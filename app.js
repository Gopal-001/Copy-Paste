

$(document).ready(function(){
    
    $('#copy').on('click',()=>{
        let val = $('#input').val();
        navigator.clipboard.writeText(val);
    });

    $('#paste').on('click',()=>{
        navigator.clipboard.readText().then((data)=>{
            $('#output').val(data);
        });
    });
});