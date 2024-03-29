   // TABS // 
   
    // MAIN TABS // 

   // Default open the first tab
    document.getElementsByClassName("tabPanel")[0].style.display = "block";
    document.getElementsByClassName("buttonContainer")[0].className += " active";

    function openTab(event, tabName) {

        // Get all elements with class="tabPanel" and hide them
        let i, tabPanel, buttonContainer;
        tabPanel = document.getElementsByClassName("tabPanel");
        for (i = 0; i < tabPanel.length; i++) {
            tabPanel[i].style.display = "none";
        }

        // Get all elements with class="button" and remove the class "active"
        buttonContainer = document.getElementsByClassName("buttonContainer");
        for (i = 0; i < buttonContainer.length; i++) {
            buttonContainer[i].className = buttonContainer[i].className.replace(" active", "");
        }

        // Code to remove the "active" class from the previously active button
        let activeButtons = document.getElementsByClassName("active");
        for (i = 0; i < activeButtons.length; i++) {
            activeButtons[i].classList.remove("active");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }


 // DOCUMENT DROPDOWN //

    // Get the dropdown element and the tab content elements
const dropdown = document.getElementById("DocumentMenu");
const tabContents = document.getElementsByClassName("DocumentTabContent");

// Hide all the tab content elements except the first one
for (let i = 1; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
}

// Show the first tab content element
tabContents[0].style.display = "block";


// Add an event listener to the dropdown element
dropdown.addEventListener("change", openDocumentTab);

// Function to show the selected tab content and hide the rest
function openDocumentTab(event) {
    // Get the selected value from the dropdown
    const selectedValue = event.target.value;

    // Loop through all the tab content elements and hide them except the selected one
    for (let i = 0; i < tabContents.length; i++) {
        const selectedNum = selectedValue.match(/\d+/)[0];
        if (tabContents[i].id === `DocumentTab${selectedNum}`) {
            tabContents[i].style.display = "block";
        } else {
            tabContents[i].style.display = "none";
        }
    }
}


// List DROPDOWN //

    // Get the dropdown element and the tab content elements
    const listdropdown = document.getElementById("ListMenu");
    const listtabContents = document.getElementsByClassName("ListTabContent");
     
     // Hide all the tab content elements except the first one
     for (let i = 1; i < listtabContents.length; i++) {
         listtabContents[i].style.display = "none";
     }
     
     // Show the first tab content element
     listtabContents[0].style.display = "block";
     
     
     // Add an event listener to the dropdown element
     listdropdown.addEventListener("change", openCalculTab);
     
     // Function to show the selected tab content and hide the rest
     function openListTab(event) {
         // Get the selected value from the dropdown
         const selectedValue = event.target.value;
     
        // Loop through all the tab content elements and hide them except the selected one
        for (let i = 0; i < listtabContents.length; i++) {
            const selectedNum = selectedValue.match(/\d+/)[0];
            if (listtabContents[i].id === `ListTab${selectedNum}`) {
                listtabContents[i].style.display = "block";
            } else {
                listtabContents[i].style.display = "none";
            }
        }
    }
    
 
 

 // Caclulation DROPDOWN //

    // Get the dropdown element and the tab content elements
   const calcdropdown = document.getElementById("CalculMenu");
   const calctabContents = document.getElementsByClassName("CalculTabContent");
    
    // Hide all the tab content elements except the first one
    for (let i = 1; i < calctabContents.length; i++) {
        calctabContents[i].style.display = "none";
    }
    
    // Show the first tab content element
    calctabContents[0].style.display = "block";
    
    
    // Add an event listener to the dropdown element
    calcdropdown.addEventListener("change", openCalculTab);
    
    // Function to show the selected tab content and hide the rest
    function openCalculTab(event) {
        // Get the selected value from the dropdown
        const selectedValue = event.target.value;
    
        // Loop through all the tab content elements and hide them except the selected one
        for (let i = 0; i < calctabContents.length; i++) {
            if (calctabContents[i].id === `CalculTab${selectedValue.slice(-1)}`) {
                calctabContents[i].style.display = "block";
            } else {
                calctabContents[i].style.display = "none";
            }
        }
    }




// CALCULATIONS // 

    function calculate_bielle1() {
        var d1 = parseFloat(document.getElementById("d1").value);
        var D1 = parseFloat(document.getElementById("D1").value);
        var L1 = parseFloat(document.getElementById("L1").value);
        var Eb = parseFloat(document.getElementById("Eb").value);

        // Perform calculation using the bielle inputs
        var Entraxe1 = L1+Eb -(D1+d1+2*Eb)/2;

        // Display the result
        document.getElementById("Entraxe1").innerHTML = "Entraxe (mm): " + Entraxe1;
    }

    function calculate_bielle2() {
        var d2 = parseFloat(document.getElementById("d2").value);
        var D2 = parseFloat(document.getElementById("D2").value);
        var L2 = parseFloat(document.getElementById("L2").value);

        // Perform calculation using the bielle inputs
        var Entraxe2 = L2 -(D2+d2)/2 ;

        // Display the result
        document.getElementById("Entraxe2").innerHTML = "Entraxe (mm): " + Entraxe2;
    }

    function calculate_cylindree() {
        var D = parseFloat(document.getElementById("D").value);
        var L = parseFloat(document.getElementById("L").value);
        var N = parseFloat(document.getElementById("N").value);

        // Perform calculation using the cylindree inputs
        var Cylindree_u = 3.141592*(D*D)*L/4/1e6 ;
        var Cylindree_t = 3.141592*(D*D)*L*N/4/1e6 ;
        var Cylindree_t_c_e = 3.141592*(D*D)*L*N*1.7/4/1e6 ;
        var Cylindree_t_c_d = 3.141592*(D*D)*L*N*1.5/4/1e6 ;

        // Display the result
        document.getElementById("Cylindree_u").innerHTML = "Cylindrée Unitaire (L) : " + Cylindree_u.toFixed(2);
        document.getElementById("Cylindree_t").innerHTML = "Cylindrée Totale (L) : " + Cylindree_t.toFixed(2);
        document.getElementById("Cylindree_t_c_e").innerHTML = "Cylindrée Total corrigé Turbo Essence  (L) : " + Cylindree_t_c_e.toFixed(2);
        document.getElementById("Cylindree_t_c_d").innerHTML = "Cylindrée Total corrigé Turbo Diesel (L) : " + Cylindree_t_c_d.toFixed(2);
    }

    function calculate_taux_c() {
        var VburCul = parseFloat(document.getElementById("VburCul").value);
        var VplaqCul = parseFloat(document.getElementById("VplaqCul").value);
        var VburPis = parseFloat(document.getElementById("VburPis").value);
        var Dpis = parseFloat(document.getElementById("Dpis").value);
        var Ejoint = parseFloat(document.getElementById("Ejoint").value);
        var Djoint = parseFloat(document.getElementById("Djoint").value);
        var Vcylu = parseFloat(document.getElementById("Vcylu").value);

        var Vcul = VburCul-VplaqCul;
        var Vpist = VburPis - 0.1*Dpis*Dpis*3.141592/4 ;
        var Vjoint = Ejoint*Djoint*Djoint*3.141592/4 ;
        


        // Perform calculation using the cylindree inputs
        var Taux_C = (Vcylu + Vcul + Vpist + Vjoint)/( Vcul + Vpist + Vjoint)  ;


        // Display the result
        document.getElementById("Vcul").innerHTML = "Volume Culasse (cm3) : " + Vcul.toFixed(2) ;
        document.getElementById("Vpist").innerHTML = "Volume piston (cm3) : " + Vpist.toFixed(2) ;
        document.getElementById("Vjoint").innerHTML = "Volume joint (cm3) : " + Vjoint.toFixed(2) ;
        document.getElementById("Taux_C").innerHTML = "Taux de compression : " + Taux_C.toFixed(2) + ":1";
    }

    function calculate_BV() {
        var R1 = parseFloat(document.getElementById("R1").value);
        var R2 = parseFloat(document.getElementById("R2").value);
        var R3 = parseFloat(document.getElementById("R3").value);
        var R4 = parseFloat(document.getElementById("R4").value);
        var R5 = parseFloat(document.getElementById("R5").value);
        var R6 = parseFloat(document.getElementById("R6").value);
        var RP = parseFloat(document.getElementById("RP").value);
        var DR = parseFloat(document.getElementById("DR").value);
        // Perform calculation using the bielle inputs
        var LS1 = RP * R1 * DR * 10;
        var LS2 = RP * R2 * DR * 10;
        var LS3 = RP * R3 * DR * 10;
        var LS4 = RP * R4 * DR * 10;
        var LS5 = RP * R5 * DR * 10;
        var LS6 = RP * R6 * DR * 10;

        // Display the result
        document.getElementById("LS1").innerHTML = "Longueur 1ère(m): " + LS1.toFixed(3);
        document.getElementById("LS2").innerHTML = "Longueur 2nd(m): " +  LS2.toFixed(3);
        document.getElementById("LS3").innerHTML = "Longueur 3ème(m): " + LS3.toFixed(3);
        document.getElementById("LS4").innerHTML = "Longueur 4ème(m): " + LS4.toFixed(3);
        document.getElementById("LS5").innerHTML = "Longueur 5ème(m): " + LS5.toFixed(3);
        document.getElementById("LS6").innerHTML = "Longueur 6ème(m): " + LS6.toFixed(3);
    }

    function calculate_hauteur_b() {
        var Da = parseFloat(document.getElementById("Da").value);
        var da = parseFloat(document.getElementById("da").value);
        var H = parseFloat(document.getElementById("H").value);

        // Perform calculation using the bielle inputs
        var Hauteur_B = H + da - (Da /2) ;

        // Display the result
        document.getElementById("Hauteur_B").innerHTML = "Hauteur de bloc (mm): " + Hauteur_B;
    }

    function calculate_Voie() {
        var V1 = parseFloat(document.getElementById("V1").value);
        var V2 = parseFloat(document.getElementById("V2").value);

        // Perform calculation using the bielle inputs
        var Voie = (V1 + V2)/2 ;

        // Display the result
        document.getElementById("Voie").innerHTML = "Voie (cm): " + Voie;
    }




