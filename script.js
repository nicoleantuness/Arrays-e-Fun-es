function positions(firstPlace, secondPlace, lastPlace){
    let podio = [firstPlace, secondPlace, lastPlace]
 if(podio[0] != "Daniel"){

    if(podio[1] == "Daniel"){
        console.log(`1° colocado ${podio[1]}`)
        console.log(`2° colocado ${podio[0]}`)
        console.log(`3° colocado ${podio[2]}`)
    }else if(podio[2] == "Daniel"){
        console.log(`1° colocado ${podio[2]}`)
        console.log(`2° colocado ${podio[1]}`)
        console.log(`3° colocado ${podio[0]}`)
    }
}else{
   console.log(`1° colocado ${podio[0]}`)
   console.log(`2° colocado ${podio[1]}`)
   console.log(`3° colocado ${podio[2]}`)
}
}
console.log(positions("Rafael", "Manoel","Daniel"))
console.log(positions("Manoel", "Daniel", "Rafael"))
console.log(positions("Daniel", "Rafael", "Manoel"))
