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
        const $tempInput = $("<input>");
        $("body").append($tempInput);
        $tempInput.val(pass).select();
        document.execCommand("copy");
        $tempInput.remove();
    })

    
    let clipboard = new ClipboardJS(btn[0], {
        text: function(trigger) {
            return generatePass();
        }
    });

    clipboard.on('success', function(e) {
        alert("Senha copiada para a área de transferência");
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Erro ao copiar a senha', e);
    });

})