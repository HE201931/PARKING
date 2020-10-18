let globalArray1 = new Array(70 );
//const MAX_HEIGHT = 3.00
function initializeArray()
    {
        for(let i = 0 ; i <= globalArray1.length - 1 ; i++)
        {

            globalArray1[i] = new Array(3);

            for(let o = 0 ; o <= globalArray1[i].length - 1 ; o++)
            {
                globalArray1[i][o] = "";
            }

        }
    }

function resetArray()
    {
        globalArray1 = new Array(70);
    }

function beginWithThisFunction()
    {
        if(globalArray1.every( elem => elem == undefined) == true){initializeArray();}
        let testValue = addVehicle();
        addInBigArray(testValue[0] , testValue[1] , testValue[2]);

        /**
         console.log(globalArray[65][0]);
         console.log(globalArray[65][1]);
         console.log(globalArray[65][2]);
         globalArray[65][0] = "Volvo";
         globalArray[65][1] = "1-AAA-000";
         globalArray[65][2] = "BLACK";
         console.log(globalArray[65][0]);
         console.log(globalArray[65][1]);
         console.log(globalArray[65][2]);
         **/
    }

function addInBigArray(marqueVehicle, plaqueVehicle ,colorVehicle, placeNumber){
	
        if(placeNumber = "N"){      //Choix d'attribution place automatique
			
		for(let i = 0 ; i <= globalArray.length - 1 ; i++){

            if (globalArray[i][0] =="" &&  globalArray[i][1] == "" ){
                globalArray[i][0] = marqueVehicle;
                globalArray[i][1] = plaqueVehicle;
                globalArray[i][2] = colorVehicle;

                console.log(`Véhicule ajouté emplacement ${i}`);
                break;
				//console.log(`Véhicule ajouté emplacement ${i}   ${globalArray[i][0]}   ${  globalArray[i][1]}   ${globalArray[i][2]}`
            }

            else{
                continue;
            }

        }
			
	}else{          //Si choix de place demandé par client
		if(globalArray[placeNumber][0] ==""){
			globalArray[placeNumber][0] = marqueVehicle;
            globalArray[placeNumber][1] = plaqueVehicle;
            globalArray[placeNumber][2] = colorVehicle;
		}else{
			console.log("Cette place est déjà prise, choix de la place la plus proche pour vous..."); 
			for(i = placeNumber + 1; i <= globalArray.length; i++){ //Selec. auto place plus proche vers haut du tableau
				
			if (globalArray[i][0] == "" &&  globalArray[i][1] == "" ){
            globalArray[i][0] = marqueVehicle;
            globalArray[i][1] = plaqueVehicle;
            globalArray[i][2] = colorVehicle;

            console.log(`Véhicule ajouté emplacement ${i}`);
            break;
				
			}else{                                 //Si tableau plein jusqu'au max du nbr de place ,parcours choix init. vers le bas
				if(i + 1 > globalArray.length){
					for(i = placeNumber - 1; i >= 0; i--){
						if (globalArray[i][0] == "" &&  globalArray[i][1] == "" ){
						globalArray[i][0] = marqueVehicle;
						globalArray[i][1] = plaqueVehicle;
						globalArray[i][2] = colorVehicle;

						console.log(`Véhicule ajouté emplacement ${i}`); 
						break;
						}else{
							continue;         //Si place prise : reitération de la boucle place suivante(i--)
						}
					}
				}else{
					continue;   //Si place prise : reitération de la boucle place suivante (i++)
				}
				
			}
			
			}
		}
	}
    }


function clearPlaceInArray()//marqueVehicle , matricule)
    {
        let brandVehicle = prompt("marqueVehicle");
        let ID = prompt("matricule");
        for(let i = 0 ; i <= globalArray1.length - 1 ; i++)
        {
            if (globalArray1[i][0] == brandVehicle &&  globalArray1[i][1] ==  ID)
            {
                globalArray1[i][0] = "";
                globalArray1[i][1] = "";
                globalArray1[i][2] = "";
                console.log(`Véhicule supprimé !`);
                break;
            }
            else
            {
			console.log(`Cette place est déjà prise.`);

            }
        }
    }

function addVehicle()
    {
        let brandVehicle = "";
        let heightVehicle = "";
        let colorVehicle = "";
        let IDVehicle = "";
        while(brandVehicle == "" ||  brandVehicle.includes(" ") || heightVehicle >= MAX_HEIGHT ||  colorVehicle == "" || IDVehicle ==""  ||
        colorVehicle.includes(" ")|| IDVehicle.includes(" ") || heightVehicle =="" ||  heightVehicle ==" ")
        {
            brandVehicle = prompt("Veuillez insèrer la marque de votre véhicule");
            heightVehicle = prompt("Veuillez insèrer la taille de votre véhicule");
            colorVehicle = prompt("Veuillez insèrer la couleur de votre véhicule");
            IDVehicle = prompt("Veuillez insèrer la plaque de votre véhicule");

        }
        return [brandVehicle ,IDVehicle , colorVehicle];
    }
	
	
	
	
	// PARTIE EXECUTION DU PROJET
	
	let choixPlace = prompt("Avez vous une place désirée en particulier ? ( 'N' pour choix automatique)");
	addVehicle().addInBigArray(tabData[0],tabData[1] ,tabData[2], choixPlace); 
	
	
