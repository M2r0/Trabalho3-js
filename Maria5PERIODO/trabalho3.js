$(document).ready(function() {
    $('.btn-calculate').click(function() {
        var waistCircumference = parseFloat($('#waist-circumference').val());
        var height = parseFloat($('#height').val());

        if (isNaN(waistCircumference) || isNaN(height)) {
            $('.result').text('Por favor, insira valores numéricos válidos.');
            return;
        }

        var iac = (waistCircumference / Math.pow(height, 1.5)) - 18;
        var category = '';

        if (iac < 8) {
            category = 'Abaixo do peso';
        } else if (iac >= 8 && iac < 21) {
            category = 'Peso normal';
        } else if (iac >= 21 && iac < 26) {
            category = 'Sobrepeso';
        } else if (iac >= 26 && iac < 31) {
            category = 'Obesidade Grau I';
        } else if (iac >= 31 && iac < 36) {
            category = 'Obesidade Grau II';
        } else {
            category = 'Obesidade Grau III';
        }

        $('.result').html('Seu IAC é: ' + iac.toFixed(2) + '<br>Categoria: ' + category);
    });
});
