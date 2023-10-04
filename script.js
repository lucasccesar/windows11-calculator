var botoes = [limpar, porcentagem, divisao, multiplicacao, sete, oito, nove, menos, quatro, cinco, seis, mais, um, dois, tres, zero, virgula, igual];

botoes.forEach((element) => element.addEventListener('click', clicado));

var numCount = 0,
    nums = [(num1 = ''), (num2 = '')],
    sinal = '',
    sinalCount = '',
    result = 0,
    resultTemp = 0,
    operacoes = document.getElementById('operacoes'),
    operacaoTemp = '',
    resultado = document.getElementById('resultado'),
    ponto = 0,
    operacoes = document.getElementById('operacoes');

function clicado(event) {
    if (nums[0] == '') {
        operacoes.classList.replace('visivel', 'invisivel');
    }
    if (nums[numCount] == '' && event.target.innerText == '0') {
    } else if (event.target.innerText == '1' || event.target.innerText == '2' || event.target.innerText == '3' || event.target.innerText == '4' || event.target.innerText == '5' || event.target.innerText == '6' || event.target.innerText == '7' || event.target.innerText == '8' || event.target.innerText == '9' || event.target.innerText == '0' || event.target.innerText == ',') {
        if (event.target.innerText == ',') {
            if (nums[numCount] == '') {
                nums[numCount] = '0' + '.';
            } else {
                if (ponto == 0) {
                    nums[numCount] = nums[numCount] + '.';
                    ponto = 1;
                    resultado.innerText = nums[numCount];
                }
            }
        } else {
            if (sinal == '' && nums[numCount] == '') {
                numCount = 0;
                sinal = '';
                nums[0] = '';
                nums[1] = '';
                result = 0;
                resultTemp = 0;
                sinalCount = 0;
                resultado.innerText = 0;
                operacoes.innerText = 0;
                operacaoTemp = '';
            }
            nums[numCount] = nums[numCount] + event.target.innerText;
            resultTemp = 0;
            if (numCount == 0) {
                resultado.innerText = nums[numCount];
            } else if (numCount == 1) {
                resultado.innerText = nums[numCount];
            }
            if (numCount == 1) {
                if (sinal == '+') {
                    resultTemp = parseFloat(nums[0]) + parseFloat(nums[1]);
                } else if (sinal == '-') {
                    resultTemp = parseFloat(nums[0]) - parseFloat(nums[1]);
                } else if (sinal == '*') {
                    resultTemp = parseFloat(nums[0]) * parseFloat(nums[1]);
                } else if (sinal == '/') {
                    resultTemp = parseFloat(nums[0]) / parseFloat(nums[1]);
                }
            }
        }
    } else if (event.target.innerText == '%' || event.target.innerText == '/' || event.target.innerText == '*' || event.target.innerText == '-' || event.target.innerText == '+') {
        sinal = event.target.innerText;
        if (nums[0] != '') {
            operacoes.classList.replace('invisivel', 'visivel');
        }

        if (numCount == 0 && nums[numCount] != '') {
            numCount = 1;
            ponto = 0;
        } else if (numCount == 1) {
            numCount = 0;
        }

        if (sinalCount == 1) {
            if (resultTemp != 0) {
                nums[0] = resultTemp;
            }
            result = resultTemp;
            nums[1] = '';
            numCount = 1;
            ponto = 0;
        }

        operacaoTemp = nums[0] + ' ' + sinal;
        operacoes.innerText = operacaoTemp;
        resultado.innerText = nums[0];

        sinalCount = 1;
    } else if (event.target.innerText == 'C') {
        numCount = 0;
        sinal = '';
        nums[0] = '';
        nums[1] = '';
        result = 0;
        resultTemp = 0;
        sinalCount = 0;
        resultado.innerText = 0;
        operacoes.innerText = 0;
        operacaoTemp = '';
        ponto = 0;
        operacoes.classList.replace('visivel', 'invisivel');
    } else if (event.target.innerText == '=' && nums[1] != '') {
        if (nums[0] != '') {
            operacoes.classList.replace('invisivel', 'visivel');
        }
        operacaoTemp = `${nums[0]} ${sinal} ${nums[1]} =`;
        if (sinal == '+') {
            result = parseFloat(nums[0]) + parseFloat(nums[1]);
            nums[0] = result;
            nums[1] = '';
        } else if (sinal == '-') {
            result = parseFloat(nums[0]) - parseFloat(nums[1]);
            nums[0] = result;
            nums[1] = '';
        } else if (sinal == '*') {
            result = parseFloat(nums[0]) * parseFloat(nums[1]);
            nums[0] = result;
            nums[1] = '';
        } else if (sinal == '/') {
            result = parseFloat(nums[0]) / parseFloat(nums[1]);
            nums[0] = result;
            nums[1] = '';
        } else if (sinal == '%') {
            result = (parseFloat(nums[0]) * parseFloat(nums[1])) / 100;
        }

        operacoes.innerText = operacaoTemp;
        resultado.innerText = result;
        sinal = '';
    }
}
