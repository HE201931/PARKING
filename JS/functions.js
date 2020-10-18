let globalArray = new Array(70 );
const MAX_HEIGHT = 3.00

class arrayHelper{

    static initializeArray()
    {
        for(let i = 0 ; i <= globalArray.length - 1 ; i++)
        {
            globalArray[i] = new Array(3);
          for(let o = 0 ; o <= globalArray[i].length - 1 ; o++)
          {
              globalArray[i][o] = "";
          }
        }
    }

    static resetArray()
    {
        globalArray = new Array(70);
    }

    static beginWithThisFunction()
    {
        if(globalArray.every( elem => elem == undefined) == true){arrayHelper.initializeArray();}

/**
        console.log(testValue[0]);
        console.log(testValue[1]);
        console.log(testValue[2]);

**/
        let testValue = arrayHelper.addVehicle();

        arrayHelper.addInBigArray(testValue[0] , testValue[1] , testValue[2]);
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

    static addInBigArray(marqueVehicle, plaqueVehicle ,colorVehicle)
    {
        for(let i = 0 ; i <= globalArray.length - 1 ; i++)
        {
            if (globalArray[i][0] =="" &&  globalArray[i][1] ==  "" )
            {
           //     console.log(`il reste une place à ${i}`)
                globalArray[i][0] = marqueVehicle;
                globalArray[i][1] = plaqueVehicle;
                globalArray[i][2] = colorVehicle;

                console.log(`Véhicule ajouté à ${i}   ${globalArray[i][0]}   ${  globalArray[i][1]}   ${globalArray[i][2]}`);
               break;
            }
            else
            {
                console.log(`Cette place est déjà prise ${i} et ${globalArray[i][0]} ${globalArray[i][1]} ${globalArray[i][2]}`);
            }

        }
    }

    static clearPlaceInArray()//marqueVehicle , matricule)
    {
        let  brandVehicle = prompt("marqueVehicle");
        let ID = prompt("matricule");
        for(let i = 0 ; i <= globalArray.length - 1 ; i++)
        {
            if (globalArray[i][0] == brandVehicle &&  globalArray[i][1] ==  ID)
            {
                globalArray[i][0] = "";
                globalArray[i][1] = "";
                globalArray[i][2] = "";
                console.log(`Véhicule supprimé !`);
                break;
            }
            else
            {
                console.log(`Cette place est déjà prise ${i} e`);
            }
        }
    }

    static addVehicle()
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
}

