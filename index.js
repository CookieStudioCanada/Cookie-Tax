// GC data

let gciEl = document.getElementById("gci-el")
let gciTaxEl = document.getElementById("gci-tax-el")
let gciTextEl = document.getElementById("gci-text-el")
let gciSpaTextEl = document.getElementById("gci-spa-text-el")

let gcTextEl = document.getElementById("gcText-el")

let ld = false
let spa = false

// Calcul revenu data
let taxEl = document.getElementById("tax-el")

// Calculatrice - Intérêts composés
let intEl = document.getElementById("placement-el")
let intTextEl = document.getElementById("placement-text-el")

// function



function gcButton()
{
    let pd = document.getElementById("PD").value
    let pbr = document.getElementById("PBR").value
    sum = (pd - pbr) / 2
    console.log(sum)
    gciEl.textContent = "GCI : " + sum + " $" // possible d'obtenir des espaces ou virgule? 180 000 ou 180,000?
    gciTaxEl.textContent = "Montant a payer : " + sum / 2 + " $"// comme si le GC etait payable a 50%... 

    // permet de display le block qui est invisible au depart avec la classe hidden.
    if (spa === true)
    {
      gcTextEl.style.display = "block"
      gciTextEl.style.display = "none" // meilleur methode? 
      gciSpaTextEl.style.display = "block" 
    } else {
      gcTextEl.style.display = "block"
      gciSpaTextEl.style.display = "none" 
      gciTextEl.style.display = "block" 
    }
}

function revenuButton()
{
    let revenu = document.getElementById("Income").value
    let depense = document.getElementById("Charge").value
    impot = (revenu - depense)
    taxEl.textContent = "Impot : " + impot
}

function placementButton()
{
    let placement = document.getElementById("Placement").value
    let versement = document.getElementById("Versement").value
    let interet = document.getElementById("Interet").value
    let annee = document.getElementById("Annee").value
    
    initial = ((interet / 100) + 1) * placement 
    versements = ((interet / 100) + 1) * (versement * 12 * annee)
    amount = initial + versements // pas le bon calcul. Existe-t-il une fonction avec math? 
    intEl.textContent = "Placements : " + amount
    intTextEl.style.display = "block"
}

// Determine si lien de dependance ou non. Toutefois, ce n'est pas defini ce que le toggle change. C'est un boolean.
function ldToggle()
{
  if (ld === false)
  {
    ld = true
    console.log("Oui...")
  } else {
    ld = false
    console.log("NON")
  }
}

// Determine si c'est une SPA ou non. Toutefois, ce n'est pas defini ce que le toggle change. C'est un boolean. 
function spaToggle() // ce qui se 
  {
    if (spa === false)
    {
      spa = true
      console.log("Oui...")
    } else {
      spa = false
      console.log("NON")
    }
  }

function tabs(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    gcTextEl.style.display = "none" // je reset manuellement qu'il n'y ait pas de text Saviez-vous du GC... Ca fonctionne...
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

<<<<<<< Updated upstream
  tabs(Event, 'Menu') // pas certain de comprendre pourquoi Event avec un E majuscule fonctionne, mais tant mieux...
=======
  tabs(Event, 'Menu') // pas certain de comprendre pourquoi Event avec un E majuscule fonctionne, mais tant mieux...
>>>>>>> Stashed changes
