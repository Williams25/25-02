function limpar(){
     document.getElementById("TipoLanche").value = "";
    document.getElementById("TipoAcompanhamento").value = "";
    document.getElementById("TipoRefri").value = "";
    document.getElementById("nome").value = "";
     document.getElementById("endereco").value = ""; 
}
function Combo(){
    let lanche = document.getElementById("TipoLanche").value;
    let acompanhamento = document.getElementById("TipoAcompanhamento").value;
    let refri = document.getElementById("TipoRefri").value;
    let name = document.getElementById("nome").value;
    let end = document.getElementById("endereco").value;
    
    if(lanche == 1){
        lanche = 14;
    }
    if(lanche == 2){
        lanche = 10;
    }
    if(lanche == 3){
        lanche = 16;
    }
    if(lanche == 4){
        lanche = 20;
    }
    if(lanche == 5){
        lanche = 9;
    }

    if(acompanhamento == 1){
        acompanhamento = 10;
    }
    if(acompanhamento == 2){
        acompanhamento = 15;
    }
    if(acompanhamento == 3){
        acompanhamento = 20;
    }
    if(acompanhamento == 4){
        acompanhamento = 16;
    }
    if(acompanhamento == 5){
        acompanhamento = 10;
    }
    if (refri == 1) {
        refri = 8;
    }
    if (refri == 2) {
        refri = 5;
    }
    if (refri == 3) {
        refri = 5;
    }
    if (refri == 4) {
        refri = 5;
    }
    if (refri == 5) {
        refri = 5;
    }
    let total = lanche + acompanhamento + refri;
    if (total < 30){
       let totalP = total + 5;
       alert("Nome do cliente: " + name + "\n" +"Edereço da entrega: "+end + "\n" +"Valor total a pagar R$:"+total);
    }if (total > 30){
        alert("Nome do cliente: " + name + "\n" +"Edereço da entrega: "+end + "\n" +"Valor total a pagar R$:"+total);
    }
    
}