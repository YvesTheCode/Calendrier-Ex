// function mois() {

// document.write("<textarea>")
// document.write("<table>")
// document.write("<tr>")
// for (let index = 1, it=0; index <= 31; ++it,++index) {

//     if (it % 7 == 0) {
//         document.write("<tr>")
//     }

//     document.write("<td>"+index+"</td>")


// }
// document.write("</tr>")
// document.write("</table>")
// document.write("</textarea>")

// }


let today = new Date(); // aujourd’hui
let current_month = today.getMonth(); // mois courant
let current_day = today.getDate();

console.log(today)
console.log(current_month)
console.log(current_day)

function mois(maxmois) {

let jour = 1


    document.write("<table>")

    for (let index = 1; index <= 5;++index) {
        document.write("<tr>")

        for(it=1; it <= 7 && jour<=maxmois; ++it ) {
            
            // if (jour=current_day) {
            //     const element = document.getElementsByTagName("td")[0]
            //     element.classList.add("today")
            // }
            
            document.write("<td id='lol'>"+(jour++)+"</td>")
           
        }
    
        document.write("</tr>")
    }

    document.write("</table>")

    
}



const moish1 = [
    "Janvier", 
    "Février", 
    "Mars", 
    "Avril", 
    "Mai", 
    "Juin", 
    "Juillet", 
    "Août", 
    "Septembre", 
    "Octobre", 
    "Novembre", 
    "Décembre"
  ];

const moismax = [
    31,  // Janvier
    28,  // Février (non bissextile)
    31,  // Mars
    30,  // Avril
    31,  // Mai
    30,  // Juin
    31,  // Juillet
    31,  // Août
    30,  // Septembre
    31,  // Octobre
    30,  // Novembre
    31   // Décembre
  ];

for (let cal = 0, moisit = 0; cal < 12; ++cal, ++moisit) {

    document.write("<h1>"+moish1[moisit]+"</h1>")
    mois(moismax[moisit])
    document.write("<br>")
    
}

// const element = document.getElementsByTagName("td")[21]
// element.classList.add("today")





// document.write("<table>")
// for (let jour = 1; jour < 31; jour++) {


//     document.write("<tr>")
//     for (let semaine = 1; semaine < 8; ++semaine) {

//         document.write("<td>" + jour + "</td>")

//     }

// document.write("</tr>")


// }
// document.write("</table>")

// document.write("<table>")

// let jour2
// for (let semaine = 1; semaine < 8; ++semaine) {
// document.write("<tr>")
//     document.write("<tr>")
//     for (let jour = 1; jour < 31; jour++) {
//         jour2 = jour
        
//     }
// document.write("<td>" + jour2 + "</td>")
// document.write("</tr>")

// }
// document.write("</table>")

//layout land