const prompt =  require("prompt-sync")();

var i, j, lin, col;
var jogadas = 0;
var jogador = 'o';
var vencedor = '';
var fimJogo = false;
var tab = [3];

// inicializa o tabuleiro
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
    // (c)
}

// (d)
if(vencedor == ''){
    console.log("Empate \n");
}else{
    console.log(`${vencedor} venceu`);
}