$(document).ready(function() {
    function calculateIMC(weight, height) {
        return weight / (height * height);
    }

    function getIMCCategory(imc) {
        if (imc < 18.5) {
            return "Bajo peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Sobrepeso";
        } else {
            return "Obesidad";
        }
    }

    function resetForm() {
        $("#weight").val("");
        $("#height").val("");
        $("#inputForm").show();
        $("#result").hide();
    }

    $("#calculateBtn").click(function() {
        var weight = parseFloat($("#weight").val());
        var height = parseFloat($("#height").val());

        var imc = calculateIMC(weight, height);
        var category = getIMCCategory(imc);

        $("#imc").text(imc.toFixed(2));
        $("#category").text(category);
        $("#inputForm").hide();
        $("#result").show();
    });

    $("#restartBtn").click(function() {
        resetForm();
    });

    $("#exitBtn").click(function() {
        resetForm();
        $("#inputForm").hide();
        $("#result").hide();
    });
});