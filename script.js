function adicionarNumero () {
    let numeroVetor = [];
    let outroNumero = Number(prompt('Escolha um número:'));
    if (!outroNumero) {
        alert('Número invalido.');
        adicionarNumero();
    } else {
        numero.push(outroNumero);
        let opcaoAdicionarNumero = prompt('Deseja adicionar outro número:\n1 - Sim\n2 - Não');
        if (opcaoAdicionarNumero == 1) {
            adicionarNumero();
        }
    }
}

function calculadora() {
    const opcao = Number(prompt("Escolha uma opção:\n1 - Soma (+)\n2 - Subtração(-)\n3 - Multiplicação (*)\n4 - Divisão (/)"));

    if (!opcao || opcao >= 5) {
        alert ('Erro - Opção inválida. Favor inserir uma opção correta.');
        calculadora();
    } else {

        adicionarNumero();
        let resultado = 0;
        let i = 0;

        function soma() {
            while (i < numeroVetor) {
                resultado = resultado + numeroVetor[i];
            }
            alert (`O resultado da soma é: ${resultado}`);

        }

        function subtracao() {
            resultado = n1 - n2;
            alert (`${n1} - ${n2} = ${resultado} `);
        }

        function multiplicacao() {
            resultado = n1 * n2;
            alert (`${n1} * ${n2} = ${resultado} `);
        }

        function divisao() {
            resultado = n1 / n2;
            alert (`${n1} / ${n2} = ${resultado} `);
        }

        function novaOperacao() {
            let outraOpcao = prompt('Deseja realizar outra operação?\n1 - Sim\n2 - Não');
            if (outraOpcao == 1) {
                calculadora();
            } else {
                alert ('Até mais!');
            }
        }

        if (opcao == 1) {
            soma();
            novaOperacao();
        } else if (opcao == 2) {
            subtracao();
            novaOperacao();
        } else if (opcao == 3) {
            multiplicacao();
            novaOperacao();
        } else if (opcao == 4) {
            divisao();
            novaOperacao();   
        }
    }   
}


calculadora();