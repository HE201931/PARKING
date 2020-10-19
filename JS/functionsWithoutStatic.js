let globalArray = new Array(70);
function initializeArray(){
        for(let i = 0 ; i <= globalArray.length - 1 ; i++){

            globalArray[i] = new Array(3);
		
            for(let o = 0 ; o <= globalArray[i].length - 1 ; o++){
                globalArray[i][o] = "";
            }

        }
	}

function resetArray(){
        globalArray = new Array(70);
	}


function addInBigArray(marqueVehicle, plaqueVehicle ,colorVehicle, placeNumber){        //Ajout de véhicule dans le parking 
	
		if(placeNumber = 'N'){          //Annulation réservation de place
			console.log("Reservation annulée, bonne journée !"); 
		}else if(placeNumber = 'A'){      //Choix d'attribution place automatique
			
			for(let i = 0 ; i <= globalArray.length - 1 ; i++){     //Si place libre trouvée

				if (globalArray[i][0] =="" &&  globalArray[i][1] == "" ){
					globalArray[i][0] = marqueVehicle;
					globalArray[i][1] = plaqueVehicle;
					globalArray[i][2] = colorVehicle;

					console.log(`Véhicule ajouté emplacement ${i}`);
					break;
				}

				else{
					continue;  //Iteration suivante si pas dispo
				}

			}
			
		}else if(placeNumber > 0 && placeNumber <= 70){          //Si choix de place demandé par client
			if(globalArray[placeNumber][0] ==""){
				globalArray[placeNumber][0] = marqueVehicle;
				globalArray[placeNumber][1] = plaqueVehicle;
				globalArray[placeNumber][2] = colorVehicle;
			}else{
				console.log("Cette place est déjà prise, choix de la place la plus proche pour vous..."); 
				for(i = placeNumber + 1; i <= globalArray.length; i++){ //Selec. auto place plus proche vers haut du tableau
				
					if (globalArray[i][0] == "" && globalArray[i][1] == "" ){
					globalArray[i][0] = marqueVehicle;
					globalArray[i][1] = plaqueVehicle;
					globalArray[i][2] = colorVehicle;

					console.log(`Véhicule ajouté emplacement ${i}`);
					break;
				
					}else{                                 
						if(i + 1 > globalArray.length){             //Si tableau plein jusqu'au max du nbr de place ,parcours choix init. vers le bas
							for(i = placeNumber - 1; i >= 0; i--){
								if (globalArray[i][0] == "" &&  globalArray[i][1] == "" ){  
								globalArray[i][0] = marqueVehicle;
								globalArray[i][1] = plaqueVehicle;
								globalArray[i][2] = colorVehicle;

								console.log(`Véhicule ajouté emplacement ${i}`); 
								break;
								}else{
									continue;         			//Si place prise : reitération de la boucle place suivante(i--)
								}
							}
						}else{
							continue;                 			//Si place prise : reitération de la boucle place suivante (i++)
						}
				
					}
				}
			}
		}else{
			console.log("La place choisie n'existe pas, bonne journée.");
		}
    }


function clearPlaceInArray(brandVehicle, ID){                  //Fonction de récupération d'un véhicule (retrait d'un véhicule présent dans le parking)
	
		for(let i = 0 ; i <= globalArray.length - 1 ; i++){
			if (globalArray[i][0] == brandVehicle &&  globalArray1[i][1] ==  ID){
				globalArray[i][0] = "";
				globalArray[i][1] = "";
				globalArray[i][2] = "";
				console.log(`Réservation terminée, vous pouvez aller récupérer le véhicule. Bonne journée !`);
				break;
			}
			else{
				console.log(`Cette réservation n'existe pas`);
			}
		}
	}

function addVehicle(){
        let brandVehicle = "";
        let colorVehicle = "";
        let IDVehicle = "";
        while(brandVehicle == "" ||  brandVehicle.includes(" ") || colorVehicle == "" || IDVehicle ==""  ||
        colorVehicle.includes(" ")|| IDVehicle.includes(" ")){
			
            brandVehicle = prompt("Veuillez insèrer la marque de votre véhicule");
            colorVehicle = prompt("Veuillez insèrer la couleur de votre véhicule");
            IDVehicle = prompt("Veuillez insèrer la plaque de votre véhicule");

        }
        return [brandVehicle ,IDVehicle , colorVehicle];
    }
	
	
	
	//FONCTION EXECUTION DU PROGRAMME 
	
	
	
	function beginWithThisFunction(){       //Fonction run de départ, celle ci sera init a chaque fois qu'un utilisateur veut faire une demande 
    
        if(globalArray.every( elem => elem == undefined) == true){initializeArray();}
		
		let demande = prompt("Voulez-vous reserver une place (RES) ou recupérer un véhicule (RECUP) ? "); 
		
		if(demande = "RES"){
		
			//Ajout d'une réservation exec
			let choixPlace = prompt("Avez vous une place désirée en particulier ? ( 'A' pour choix automatique, 'N' pour annuler la reservation de place )");
			let testValue = addVehicle();
			addInBigArray(testValue[0] , testValue[1] , testValue[2], choixPlace);

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
		 
		}else if(demande = "RECUP"){
			
			//Recuperation d'une réservation exec
			let plaqueRecup = prompt("Quel est votre plaque d'imatriculation ? (AAA999)"); 
			let marqueRecup = prompt("Quel est la marque de votre véhicule ? (volvo)");
			clearPlaceInArray(marqueRecup, plaqueRecup); 
		}else{
			console.log("La demande n'existe pas, bonne journée.")              //Si choix user = autre que ceux proposés, aurevoir merci et nouvelle demande.
			beginWithThisFunction(); 
		}
    }
