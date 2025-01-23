let a = Number(prompt('ჩაწერეთ თქვენი ქულა'));
if(a>=90 && a<=100){
    alert('A');
}else if(a>=70 && a<90){
    alert('B')
}else if(a>=50 && a<70){
    alert('C');
}else if(a<50){
    alert('F');
}else{
    alert('enter tru value');
}