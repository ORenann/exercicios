var idade = [];
var achou = 'n', resp ='s';
var idade_procurar;

for (i=0;resp =='s'; i++){
  idade [i] = prompt ("digite idade");
  resp = prompt ("continuar? s/n");
}

idade_procurar = parseInt(prompt("qual idade?"));

for (i=0; (achou =='n'&& idade.comprimento>i);i++){
  if (idade [i] == _procurar){
    achou idade='s';
  }
}
if (achou =='n'){
  alert ("nao consta no cadadstro");
}else {
  alert ("A idade"+ idade_procurar + "esta na posição "+i);
}


