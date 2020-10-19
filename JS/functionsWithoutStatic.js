let globalArray1 = new Array(70 );
const MAX_HEIGHT = 3.00
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

function addInBigArray(marqueVehicle, plaqueVehicle ,colorVehicle)
    {
        let chooseAPlace  = confirm("Voulez-vous choisir votre place ?");
        if (chooseAPlace ==true)
        {
            let putANumber  = prompt("Veuillez insèrer un chiffre entre 0 et 69");
            if (globalArray1[putANumber][0] =="" &&  globalArray1[putANumber][1] ==  "" )
            {
                globalArray1[putANumber][0] = marqueVehicle;
                globalArray1[putANumber][1] = plaqueVehicle;
                globalArray1[putANumber][2] = colorVehicle;
                console.log(`Véhicule ajouté à ${putANumber}   ${globalArray1[putANumber][0]}   ${  globalArray1[putANumber][1]}   ${globalArray1[putANumber][2]}`)
            }
            else
            {
                console.log(`Cette place est déjà prise ${putANumber} et ${globalArray1[putANumber][0]} ${globalArray1[putANumber][1]} ${globalArray1[putANumber][2]}`)
            }
        }

        else
            {

                for(let i = 0 ; i <= globalArray1.length - 1 ; i++)
                {
                    if (globalArray1[i][0] =="" &&  globalArray1[i][1] ==  "" )
                    {
                        globalArray1[i][0] = marqueVehicle;
                        globalArray1[i][1] = plaqueVehicle;
                        globalArray1[i][2] = colorVehicle;
                        console.log(`Véhicule ajouté à ${i}   ${globalArray1[i][0]}   ${  globalArray1[i][1]}   ${globalArray1[i][2]}`)
                        break;
                    }
                    else 
                    {
                         console.log(`Cette place est déjà prise ${i} et ${globalArray1[i][0]} ${globalArray1[i][1]} ${globalArray1[i][2]}`)
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
                console.log(`Cette place est déjà prise ${i} e`);

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

