function myFunction(){
    let jname= document.getElementById("text-name").value;
    let età = document.getElementById("age").value;
    let jkm= document.getElementById("km").value;
    if(jname != "" && jkm != "" && età != "select"){
        let ticket = document.getElementById("ticket");
        ViewTicket(ticket);
        document.getElementById("n-place").innerHTML = RandomNr(1, 9);
        document.getElementById("code-cp").innerHTML = RandomNr(90000, 99999);
        let prezzo_km_tot= CalcPrice(jkm);
        document.getElementById("name").innerHTML = jname
        switch(età){
            case "minorenne":
                let sconto20= CalcDiscount(prezzo_km_tot, 20)    
                document.getElementById("price").innerHTML = `${sconto20.toFixed(2)} €`;
                document.getElementById("type-ticket").innerHTML = `Biglietto scontato 20%`;
                break;
            
            case "maggiorenne":
                document.getElementById("price").innerHTML = `${prezzo_km_tot.toFixed(2)} €`;
                document.getElementById("type-ticket").innerHTML = `Biglietto Standard`;
                break;
            
            case "over65":
                let sconto40= CalcDiscount(prezzo_km_tot, 40)
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

function ViewTicket(element){
    if(element.classList.contains(`d-none`))
        element.classList.remove(`d-none`);
}

function CalcPrice(km){
    return km * 0.21
}

function CalcDiscount(price, discount){
    return price-(price/100*discount)
}


function RandomNr(start, end){
    end -= start;
    return Math.floor(Math.random() * end) + start;
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
