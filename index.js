var idade = [18, 19, 9, 28, 25, 46, 2, 55, 36, 14];
var achou = 'n';

for(i=0;(achou =='n' && i<=10);i++){
  if (idade[i]==46){
    achou ='s';
  }
}

if (achou == 'n'){

  alert ('não consta cadastro dessa idade');
}else{
  alert('idade cadastrada na posição '  +i);
}