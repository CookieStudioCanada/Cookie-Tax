// GC data

let gciEl = document.getElementById("gci-el")
let gciTaxEl = document.getElementById("gci-tax-el")
let gciTextEl = document.getElementById("gci-text-el")

let ld = false
let spa = false


// Calcul revenu data
let taxEl = document.getElementById("tax-el")

// function

function gcButton()
{
    let pd = document.getElementById("PD").value
    let pbr = document.getElementById("PBR").value
    sum = (pd - pbr) / 2
    console.log(sum)
    gciEl.textContent = "GCI : " + sum
    gciTaxEl.textContent = "Montant a payer : " + sum / 2 // comme si le GC etait payable a 50%... 
}

function revenuButton()
{
    let revenu = document.getElementById("Income").value
    let depense = document.getElementById("Charge").value
    impot = (revenu - depense)
    console.log(impot)
    taxEl.textContent = "Impot : " + impot
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