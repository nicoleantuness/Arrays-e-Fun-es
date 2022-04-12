function positions(firstPlace, secondPlace, lastPlace){
    let podio = [firstPlace, secondPlace, lastPlace]
 if(podio[0] != "Daniel"){

    if(podio[1] == "Daniel"){
        console.log(`1° colocado ${podio[1]}`)
        console.log(`2° colocado ${podio[0]}`)
        console.log(`3° colocado ${podio[2]}`)
    }else if(podio[2] == "Daniel"){
        console.log(`1° colocado ${podio[0]}`)
        console.log(`2° colocado ${podio[2]}`)
        console.log(`3° colocado ${podio[1]}`)
    }
}else{
   console.log(`1° colocado ${podio[0]}`)
   console.log(`2° colocado ${podio[1]}`)
   console.log(`3° colocado ${podio[2]}`)
}
}
console.log(positions("Manoel", "Daniel","Rafael"))




















/* if(podio[0] += podio[1]){
       return podio[0]
   }
   if(podio[0] += podio[2]){
     return podio[0]  
   }
    let resultado = arr1.concat(podio)
    console.log(resultado) */