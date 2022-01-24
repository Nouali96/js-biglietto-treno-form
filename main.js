
function myFunction(){
    let jname= document.getElementById("text-name").value;
    let età = document.getElementById("age").value;
    let jkm= document.getElementById("km").value;
    if(jname != ""){
        let ticket = document.getElementById("ticket");
        if(ticket.classList.contains(`d-none`))
            ticket.classList.remove(`d-none`);
        document.getElementById("n-place").innerHTML = Math.floor(Math.random() * 9) + 1
        document.getElementById("code-cp").innerHTML = Math.floor(Math.random() * 9999) + 90000
        let prezzo_km_tot= `${jkm}`*0.21;
        document.getElementById("name").innerHTML = jname
        switch(età){
            case "minorenne":
                let sconto20= `${prezzo_km_tot}`-(`${prezzo_km_tot}`/100*20)    
                document.getElementById("price").innerHTML = `${sconto20.toFixed(2)} €`;
                document.getElementById("type-ticket").innerHTML = `Biglietto scontato 20%`;
                break;
            
            case "maggiorenne":
                document.getElementById("price").innerHTML = `${prezzo_km_tot.toFixed(2)} €`;
                document.getElementById("type-ticket").innerHTML = `Biglietto Standard`;
                break;
            
            case "over65":
                let sconto40= `${prezzo_km_tot}`-(`${prezzo_km_tot}`/100*40)
                document.getElementById("price").innerHTML = `${sconto40.toFixed(2)} €`;
                document.getElementById("type-ticket").innerHTML = `Biglietto scontato 40%`;
                break;
            case "select":
                alert("Seleziona la tua età")      
        }
    }    
    else{
    alert("Metti i dati per calcolare il prezzo")
    }

}

function reset(){
    let reset= ""  
    document.getElementById("name").innerHTML = reset
    document.getElementById("price").innerHTML = reset
    document.getElementById("text-name").value = reset
    document.getElementById("km").value = reset
    document.getElementById("n-place").innerHTML = reset 
    document.getElementById("code-cp").innerHTML = reset
    document.getElementById("age").value = `select`
    let ticket = document.getElementById("ticket");
        if(!ticket.classList.contains(`d-none`))
            ticket.classList.add(`d-none`)
}


