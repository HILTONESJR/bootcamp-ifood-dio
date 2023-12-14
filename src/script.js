/*IHnstruções para entrega
 # 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

const hero = "Banana Man"
let exp = 0
let nivel = 10001

for (let expadc = 0 ; expadc <= 10001; expadc++) {
    expadc++
    exp = expadc
    console.log("Experiencia adiquirida " + exp );
}
console.log("O Herói de nome " + hero  + " ganhou " + nivel + " de experiencia!!.")

switch (nivel) {
    case 1000:
        console.log("Voce chegou ao nivel Ferro")
        break;
        case 1001:
            console.log("Voce chegou ao nivel Bronze")
        break;
        
        case 2001:
            console.log("Voce chegou ao nivel Prata")
        break;

        case 6001:
            console.log("Voce chegou ao nivel Ouro")
        break;

        case 7001:
            console.log("Voce chegou ao nivel Platina")
        break;

        case 8001:
            console.log("Voce chegou ao nivel Ascendente")
        break;

        case 9001:
            console.log("Voce chegou ao nivel Imortal")
        break;

        case 10001:
            console.log("Voce chegou ao nivel Radiante")
        break;

}




