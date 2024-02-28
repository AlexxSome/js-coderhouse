let weight = 0
let height = 0
let name = ""
let namesList = [];
let counter = 0;
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
        $("#name").val("");
        $("#inputForm").show();
        $("#result").hide();
    }

    $("#calculateBtn").click(function() {
        weight = parseFloat($("#weight").val());
        height = parseFloat($("#height").val());
        name = $("#name").val();

        let imc = calculateIMC(weight, height);
        let category = getIMCCategory(imc);

        $("#nameResult").text(name);
        $("#imc").text(imc.toFixed(2));
        $("#category").text(category);

        counter++;

        let user = {
            id: counter,
            name:name,
            weight:weight,
            height:height
        }
        namesList.push(user);
        addToList();

        $("#inputForm").hide();
        $("#result").show();
    });

    function addToList (){
        let selector = document.getElementById("list");
      while(selector.firstChild){
          selector.removeChild(selector.firstChild)
      }

      namesList.forEach(el => {
          console.log(el)
          let container = document.createElement("div");
          let nameP = document.createElement("p");
          let heightP = document.createElement("p");
          let weightP = document.createElement("p");

          container.dataset.id = el.id;
          nameP.textContent = el.name;
          heightP.textContent = el.height;
          weightP.textContent = el.weight;

          container.appendChild(nameP);
          container.appendChild(heightP);
          container.appendChild(weightP);
          $("#list").append(container);
      });

    }

    $("#restartBtn").click(function() {
        resetForm();
    });

    $("#exitBtn").click(function() {
        resetForm();
        $("#inputForm").hide();
        $("#result").hide();
        namesList=[];
    });
});