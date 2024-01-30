

for(let i = 0; i <= 20 ; i++){
    console.log(`${i} X 5 = tomar boyos ${i * 5} bosor `);
    let res = i*5 ;
    if(res < 20 && res >= 0 ){
        console.log("Tumi biye Korte parbe na;");
    }else if(res >= 20 && res <= 45){
        console.log("Tumi tara tari biye koro;");
    }else if(res > 45 && res <= 100){
        console.log("Tomar biye korar somoy shes;");
    }
    else{
        console.log("Invalid result");
    }
    
}

