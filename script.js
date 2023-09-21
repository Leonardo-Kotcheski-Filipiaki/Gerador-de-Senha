$(document).ready(function () {
    let slider = $('.slider');
    let btn = $('.button-cta');
    let sizePass = $('#valor');
    let password = $('.passwordGenerated');
    let containerPassword = $('.container-password')

    let chatset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';


    $(slider).on("input", function(){
        $(sizePass).text(slider.val())
    })

    function generatePass(){
        let pass = ""
        for(let i = 0, n = chatset.length; i < $(slider).val(); i++){
            pass += chatset.charAt(Math.floor(Math.random()*n));
        }
        return pass;
    }
    
    $(btn).click(function (){
        let pass = generatePass();
        $(password).text(pass);
        $(containerPassword).removeClass('hide');
        $(password).val(pass);
    })

    $(password).click(function () {
        navigator.clipboard.writeText($(password).val());
    })

})