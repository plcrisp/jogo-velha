const prompt =  require("prompt-sync")();

var i, j, lin, col;
var jogadas = 0;
var jogador = 'o';
var vencedor = '';
var fimJogo = false;
var tab = [3];

function verificarVitoria(tab, jogador) {
    for (let i = 0; i < 3; i++) {
        if (tab[i][0] === jogador && tab[i][1] === jogador && tab[i][2] === jogador) {
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (tab[0][i] === jogador && tab[1][i] === jogador && tab[2][i] === jogador) {
            return true; 
        }
    }

    if (tab[0][0] === jogador && tab[1][1] === jogador && tab[2][2] === jogador) {
        return true; 
    }

    if (tab[0][2] === jogador && tab[1][1] === jogador && tab[2][0] === jogador) {
        return true;
    }

    return false;
}

for(i = 0; i < 3; i++){
    tab[i] = [3];
    for(j = 0; j < 3; j++){
        tab[i][j] = ' ';
    }
}


while((jogadas < 9) && (fimJogo == false)){
    
    for(i = 0; i < 3; i++){
        console.log(`[${tab[i][0]}] [${tab[i][1]}] [${tab[i][2]}]`);
    }

    lin = parseInt(prompt(`${jogador} em [linha]: `));
    col = parseInt(prompt(`${jogador} em [coluna]: `));
    
    if(!(((lin >= 0)&&(lin < 3 )) && ((col >= 0)&&(col < 3 )))){
        console.log('A jogada não foi realizada dentro dos limites do tabuleiro.');
        continue;
    } 

    if(tab[lin][col] !=  ' '){
        console.log('A posição já está ocupada.');
        continue;
    }

    tab[lin][col] = jogador;
    jogadas++;

    if(!verificarVitoria(tab,jogador)){

        if(jogador == 'o') jogador = 'x';
        else if(jogador == 'x') jogador = 'o';

    }else{
        vencedor = jogador;
        fimJogo = true;
        break;
    }

}

console.log('-------------------------------------')

for(i = 0; i < 3; i++){
    console.log(`[${tab[i][0]}] [${tab[i][1]}] [${tab[i][2]}]`);
}


if(vencedor == ''){
    console.log("Empate \n");
}else{
    console.log(`O jogador ${vencedor} venceu!`);
}