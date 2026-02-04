const display = document.getElementById("display");
let resultadoMostrado = false;

function ehOperador (valor){
    return ["+", "-", "*", "/", "."].includes(valor);
}

function adicionar(valor) {
  // Se acabou de mostrar resultado
    if (resultadoMostrado) {
    if (ehOperador(valor)) {
        // Continua a conta com o resultado
        resultadoMostrado = false;
        display.value += valor;
        return;
        } else {
        // Começa conta nova
        display.value = valor;
        resultadoMostrado = false;
        return;
        }
    }

    display.value += valor;
    }

    function limpar() {
    display.value = "";
    resultadoMostrado = false;
    }

    function apagar() {
    display.value = display.value.slice(0, -1);
    }

    function calcular() {
    try {
        display.value = eval(display.value);
        resultadoMostrado = true;
    } catch {
        display.value = "Erro";
        resultadoMostrado = true;
    }
    }


document.addEventListener("keydown", function (event){
    const tecla = event.key;

    //números
    if (!isNaN(tecla)){
        adicionar(tecla);
    }

    //operadores
    if (["+", "-", "*", "/", "."].includes(tecla)){
        adicionar(tecla);
    }
    //enter = calcular
    if (tecla === "Enter"){
        calcular();
    }
    //backspace = apagar
    if (tecla === "Backspace"){
        apagar();
    }
    //escape = Limpar
    if (tecla === "Escape"){
        limpar();
    }
});