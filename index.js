//--------------{  Doctype.js  }--------------//

//R_------------{  Author      :   Bisakto-Rahi }-------------//
//R_------------{  Create      :   29/12/2024   }-------------//
//R_------------{  Update      :   05/01/2025   }-------------//

//G_------------{  Start Hare  }------------
let Letter1, Letter2, Letter3;
function input1(){
        Letter1 = prompt("Please enter 1st last issue ");
    let peraOutput1 = document.querySelector("#pera1");
        peraOutput1.innerHTML = ("1st issue is : " + Letter1);
}
function input2(){
        Letter2 = prompt("Please enter 2nd last issue ");
    let peraOutput2 = document.querySelector("#pera2");
        peraOutput2.innerHTML = ("2nd issue is : " + Letter2);
}
function input3(){
        Letter3 = prompt("Please enter 3rd last issue ");
    let peraOutput3 = document.querySelector("#pera3");
        peraOutput3.innerHTML = ("3rd issue is : " + Letter3);
}
// let subtraction = "Skip"
function result(){
    let finalResult = document.querySelector("#result-pera");

    // O ------------ Start Condition  ------------
    if(Letter1==='' || Letter2==='' || Letter3==='' ) {
            finalResult.innerHTML = ("Please Enter Correct thing" );
    }
    // G --------- Letter1 = Big Single   ---------
    else if(Letter1 === 'Big Single' && Letter2 === 'Small Single' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Small Double <br> Skip = None");
    }
    else if(Letter1 === 'Big Single' && Letter2 === 'Small Single' && Letter3 === 'Big Double'){
        finalResult.innerHTML = ("Add = Small Double  <br> Skip = None");
    }
    else if(Letter1 === 'Big Single' && Letter2 === 'Big Double' && Letter3 === 'Big Single'){
        finalResult.innerHTML = ("Add = Small Double <br> Skip = None");
    }
    else if(Letter1 === 'Big Single' && Letter2 === 'Big Double' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Big Double, Small Single <br> Skip = None");
    }
    else if(Letter1 === 'Big Single' && Letter2 === 'Small Double' && Letter3 === 'Big Single'){
        finalResult.innerHTML = ("Add = Small Double <br> Skip = None");
    }
    else if(Letter1 === 'Big Single' && Letter2 === 'Small Double' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Small Single <br> Skip = None");
    }
    else if(Letter1 === 'Big Single' && Letter2 === 'Small Double' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Big Single <br> Skip = None");
    }

    // G --------- Letter1 = Small Single  ---------
    else if(Letter1 === 'Small Single' && Letter2 === 'Big Single' && Letter3 === 'Big Double'){
        finalResult.innerHTML = ("Add = Small Single <br> Skip = None");
    }
    else if(Letter1 === 'Small Single' && Letter2 === 'Big Single' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Small Double <br> Skip = None");
    }
    else if(Letter1 === 'Small Single' && Letter2 === 'Big Double' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Small Single <br> Skip = None");
    }
    else if(Letter1 === 'Small Single' && Letter2 === 'Big Double' && Letter3 === 'Big Double'){
        finalResult.innerHTML = ("Add = Small Double, Big Single <br> Skip = None");
    }
    else if(Letter1 === 'Small Single' && Letter2 === 'Small Double' && Letter3 === 'Big Single'){
        finalResult.innerHTML = ("Add = Small Single <br> Skip = None");
    }
    else if(Letter1 === 'Small Single' && Letter2 === 'Small Double' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Big Single <br> Skip = None");
    }
    else if(Letter1 === 'Small Single' && Letter2 === 'Small Double' && Letter3 === 'Big Double'){
        finalResult.innerHTML = ("Add = Small Double <br> Skip = None");
    }
    else if(Letter1 === 'Small Single' && Letter2 === 'Small Double' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Big Single <br> Skip = None");
    }
    // G --------- Letter1 = Big Double    ---------
    else if(Letter1 === 'Big Double' && Letter2 === 'Big Single' && Letter3 === 'Big Single'){
        finalResult.innerHTML = ("Add = Small Double <br> Skip = None");
    }
    else if(Letter1 === 'Big Double' && Letter2 === 'Small Single' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Small Single <br> Skip = None");
    }
    else if(Letter1 === 'Big Double' && Letter2 === 'Small Double' && Letter3 === 'Big Single'){
        finalResult.innerHTML = ("Add = Big Double, Small Double <br> Skip = None");
    }
    else if(Letter1 === 'Big Double' && Letter2 === 'Small Double' && Letter3 === 'Big Double'){
        finalResult.innerHTML = ("Add = Big Single <br> Skip = None");
    }
    else if(Letter1 === 'Big Double' && Letter2 === 'Small Double' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Big Single, Small Double, Big Double <br> Skip = Small Double");
    }
    else if(Letter1 === 'Big Double' && Letter2 === 'Small Double' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Big Double <br> Skip = Small Double");
    }
    // G --------- Letter1 = Small Double  ---------
    else if(Letter1 === 'Small Double' && Letter2 === 'Big Single' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Big Double, Small Single <br> Skip = None");
    }
    else if(Letter1 === 'Small Double' && Letter2 === 'Big Single' && Letter3 === 'Big Double'){
        finalResult.innerHTML = ("Add = Big Single <br> Skip = None");
    }
    else if(Letter1 === 'Small Double' && Letter2 === 'Big Single' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Big Double <br> Skip = None");
    }
    else if(Letter1 === 'Small Double' && Letter2 === 'Small Single' && Letter3 === 'Big Single'){
        finalResult.innerHTML = ("Add = Small Double, Small Single, Big Double <br> Skip = Big Signal");
    }
    else if(Letter1 === 'Small Double' && Letter2 === 'Small Single' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Small Double, Big Double, Big Single <br> Skip = None");
    }
    else if(Letter1 === 'Small Double' && Letter2 === 'Small Single' && Letter3 === 'Big Double'){
        finalResult.innerHTML = ("Add = Small Double, Small Single <br> Skip = None");
    }
    else if(Letter1 === 'Small Double' && Letter2 === 'Small Single' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Small Double <br> Skip = None");
    }
    else if(Letter1 === 'Small Double' && Letter2 === 'Big Double' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Small Single <br> Skip = None");
    }
    else if(Letter1 === 'Small Double' && Letter2 === 'Big Double' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Big Double <br> Skip = None");
    }
    // G --------- Letter1 = Big Single, Letter2 = Big Single      ---------
    else if(Letter1 === 'Big Single' && Letter2 === 'Big Single' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Big Double <br> Skip = None");
    }
    else if(Letter1 === 'Big Single' && Letter2 === 'Big Single' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Small Double <br> Skip = None");
    }
    // G --------- Letter1 = Small Single, Letter2 = Small Single  ---------
    else if(Letter1 === 'Small Single' && Letter2 === 'Small Single' && Letter3 === 'Big Single'){
        finalResult.innerHTML = ("Add = Small Double <br> Skip = None");
    }
    else if(Letter1 === 'Small Single' && Letter2 === 'Small Single' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add =  Small Single, Big Double <br> Skip = None");
    }
    else if(Letter1 === 'Small Single' && Letter2 === 'Small Single' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Small Single, Small Double <br> Skip = None");
    }
    else if(Letter1 === 'Small Single' && Letter2 === 'Small Single' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Small Double <br> Skip = None");
    }
    // G --------- Letter1 = Big Double, Letter2 = Big Double      ---------
    else if(Letter1 === 'Big Double' && Letter2 === 'Big Double' && Letter3 === 'Small Double'){
        finalResult.innerHTML = ("Add = Small Single, Big Double <br> Skip = None");
    }
    else if(Letter1 === 'Big Double' && Letter2 === 'Big Double' && Letter3 === 'Big Double'){
        finalResult.innerHTML = ("Add = Big Double, Small Double, Small Single <br> Skip = Big Single");
    }
    // G --------- Letter1 = Small Double, Letter2 = Small Double  ---------
    else if(Letter1 === 'Small Double' && Letter2 === 'Small Double' && Letter3 === 'Big Double'){
        finalResult.innerHTML = ("Add = Big Double, Small single <br> Skip = None");
    }
    else if(Letter1 === 'Small Double' && Letter2 === 'Small Double' && Letter3 === 'Small Single'){
        finalResult.innerHTML = ("Add = Big Double, Big Single <br> Skip = None");
    }
    // G --------- Letter1 || Letter2 || Letter are not add yet  ---------
    else{
            finalResult.innerHTML = ("Not Added Yet");
    }
}

// y             Big Single
// y             Big Double
// y             Small Single
// y             Small Double
////_------------{  End Hare  }------------////