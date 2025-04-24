let today = new Date(); // aujourd’hui
let current_month = today.getMonth(); // mois courant
let current_day = today.getDate();

function mois(maxmois, thismonth) {

let jour = 1


    document.write("<table>")

    for (let index = 1; index <= 5;++index) {
        document.write("<tr>")

        for(it=1; it <= 7 && jour<=maxmois; ++it ) {
            
            if (jour===current_day && thismonth) {
                document.write("<td class='today'>"+(jour++)+"</td>")
            }
            else{
            document.write("<td>"+(jour++)+"</td>")
            }

        }
    
        document.write("</tr>")
    }

    document.write("</table>")

    
}



let moish1 = [
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

let moismax = [
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

let thismonth = false

for (let cal = 0, moisit = 0; cal < 12; ++cal, ++moisit) {
    if (moisit===current_month) {
        thismonth = true
    }
    else{thismonth = false}
    document.write("<h1>"+moish1[moisit]+"</h1>")
    mois(moismax[moisit],thismonth)
    document.write("<br>")
    
}