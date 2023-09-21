$(document).ready(function () {
    let slider = $('.slider');
    let btn = $('.button-cta');
    let sizePass = $('#valor');
    let password = $('.passwordGenerated');
    let containerPassword = $('.container-password');
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    $(slider).on("input", function(){
        $(sizePass).text(slider.val());
    });

    function generatePass(){
        let pass = "";
        for(let i = 0, n = charset.length; i < $(slider).val(); i++){
            pass += charset.charAt(Math.floor(Math.random()*n));
        }
        return pass;
    }

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
});
