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
    static beginWithThisFunction()
    {
        if( globalArray.every( elem => elem == undefined) == true){arrayHelper.initializeArray();}

            let testValue = arrayHelper.encoderVehicle();

            arrayHelper.addInBigArray(testValue[0] , testValue[1] , testValue[2])

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

                console.log(`Véhicule ajouté à ${i}   ${globalArray[i][0]}   ${  globalArray[i][1]}   ${globalArray[i][2]}`)

               break;
            }

            else
                {
                    console.log(`Cette place est déjà prise ${i} et ${globalArray[i][0]} ${globalArray[i][1]} ${globalArray[i][2]}`)

            }

        }
    }

    static clearPlaceInArray(place , matricule)
    {
        for(let i = 0 ; i<= globalArray.length - 1 ; i++)
        {
            if (globalArray[i][0] ==place && globalArray[i][1] == matricule)
            {

                globalArray[i][0] = "";
                globalArray[i][1] = "";
                globalArray[i][2] = "";

            }

            else
                {
                alert(`Le véhicule n'a pas pu être trouvé !`);
            }

        }


    }
    static encoderVehicle()
    {
        let marqueVehicle = "";
        let taille = "";
        let colorVehicle = "";
        let plaqueVehicle = "";

        while(marqueVehicle == "" || taille >= MAX_HEIGHT ||  colorVehicle == "" || plaqueVehicle =="" ||  marqueVehicle.includes(" ")  ||
        colorVehicle.includes(" ")|| plaqueVehicle.includes(" ") || taille =="" ||  taille ==" ")
        {
            marqueVehicle = prompt("Veuillez insèrer la marque de votre véhicule")
            taille = prompt("Veuillez insèrer la taille de votre véhicule")
            colorVehicle = prompt("Veuillez insèrer la couleur de votre véhicule")
            plaqueVehicle = prompt("Veuillez insèrer la plaque de votre véhicule")

        }

        return [marqueVehicle ,colorVehicle , plaqueVehicle]

    }

}

