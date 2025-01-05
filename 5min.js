//--------------{  Doctype.js  }--------------//

//R_------------{  Author      :   Bisakto-Rahi }-------------//
//R_------------{  Create      :   29/12/2024   }-------------//
//R_------------{  Update      :   05/01/2025   }-------------//

//G_------------{  Start Hare  }------------

let Letter1 = prompt("Please enter 1st last issue ");
let Letter2 = prompt("Please enter 2nd last issue ");
let Letter3 = prompt("Please enter 3rd last issue ");

if(Letter1==='Rahi') {
    console.log('Skip');
}
// R --- Letter1 = Big Single
else if(Letter1 === 'Big Single' && Letter2 === 'Big Double' && Letter3 === 'Big Single'){
    console.log('Add = Small Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Big Single' && Letter2 === 'Big Double' && Letter3 === 'Small Double'){
    console.log('Add = Big Double, Small Single');
    console.log('Skip = ');
}
else if(Letter1 === 'Big Single' && Letter2 === 'Small Double' && Letter3 === 'Big Single'){
    console.log('Add = Small Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Big Single' && Letter2 === 'Small Double' && Letter3 === 'Small Double'){
    console.log('Add = Big Single ');
    console.log('Skip = ');
}
else if(Letter1 === 'Big Single' && Letter2 === 'Small Single' && Letter3 === 'Small Double'){
    console.log('Add = Small Double ');
    console.log('Skip = ');
}
else if(Letter1 === 'Big Single' && Letter2 === 'Small Single' && Letter3 === 'Big Double'){
    console.log('Add = Small Double ');
    console.log('Skip = ');
}

// R --- Letter1 = Small Single

else if(Letter1 === 'Small Single' && Letter2 === 'Big Single' && Letter3 === 'Big Double'){
    console.log('Add = Small Single ');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Single' && Letter2 === 'Big Double' && Letter3 === 'Big Double'){
    console.log('Add = Small Double, Big Single');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Single' && Letter2 === 'Small Double' && Letter3 === 'Big Double'){
    console.log('Add = Small Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Single' && Letter2 === 'Small Double' && Letter3 === 'Small Single'){
    console.log('Add = Big Single');
    console.log('Skip = ');
}

// R --- Letter1 = Big Double
else if(Letter1 === 'Big Double' && Letter2 === 'Small Double' && Letter3 === 'Small Double'){
    console.log('Add = Big Single, Small Double, Big Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Big Double' && Letter2 === 'Small Double' && Letter3 === 'Big Single'){
    console.log('Add = Big Double, Small Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Big Double' && Letter2 === 'Big Single' && Letter3 === 'Big Single'){
    console.log('Add = Small Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Big Double' && Letter2 === 'Small Double' && Letter3 === 'Big Double'){
    console.log('Add = Big Single');
    console.log('Skip = ');
}

// R --- Letter1 = Small Double
else if(Letter1 === 'Small Double' && Letter2 === 'Big Single' && Letter3 === 'Big Double'){
    console.log('Add = Big Single');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Double' && Letter2 === 'Big Single' && Letter3 === 'Small Single'){
    console.log('Add = Big Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Double' && Letter2 === 'Big Double' && Letter3 === 'Small Single'){
    console.log('Add = Small Single');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Double' && Letter2 === 'Big Single' && Letter3 === 'Small Double'){
    console.log('Add = Big Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Double' && Letter2 === 'Small Single' && Letter3 === 'Big Double'){
    console.log('Add = Small Double, Small Single');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Double' && Letter2 === 'Small Single' && Letter3 === 'Big Single'){
    console.log('Add = Small Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Double' && Letter2 === 'Big Double' && Letter3 === 'Small Double'){
    console.log('Add = Big Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Double' && Letter2 === 'Small Single' && Letter3 === 'Small Double'){
    console.log('Add = Small Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Double' && Letter2 === 'Small Single' && Letter3 === 'Small Single'){
    console.log('Add = Small Double, Big Double');
    console.log('Skip = ');
}


// R ------ Letter1 = Big Single, Letter2 = Big Single

else if(Letter1 === 'Big Single' && Letter2 === 'Big Single' && Letter3 === 'Small Double'){
    console.log('Add = Big Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Big Single' && Letter2 === 'Big Single' && Letter3 === 'Small Single'){
    console.log('Add = Small Double');
    console.log('Skip = ');
}
// R ------ Letter1 = Small Single, Letter2 = Small Single
else if(Letter1 === 'Small Single' && Letter2 === 'Small Single' && Letter3 === 'Big Single'){
    console.log('Add = Small Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Single' && Letter2 === 'Small Single' && Letter3 === 'Small Double'){
    console.log('Add = Small Single');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Single' && Letter2 === 'Small Single' && Letter3 === 'Small Single'){
    console.log('Add = Small Single, Small Double');
    console.log('Skip = ');
}


// R ------ Letter1 = Big Double, Letter2 = Big Double
else if(Letter1 === 'Big Double' && Letter2 === 'Big Double' && Letter3 === 'Small Double'){
    console.log('Add = Small Single, Big Double');
    console.log('Skip = ');
}
else if(Letter1 === 'Big Double' && Letter2 === 'Big Double' && Letter3 === 'Big Double'){
    console.log('Add = Big Double, Small Double, Small Single');
    console.log('Skip = ');
}
// R ------ Letter1 = Small Double, Letter2 = Small Double
else if(Letter1 === 'Small Double' && Letter2 === 'Small Double' && Letter3 === 'Big Double'){
    console.log('Add = Big Double, Small single');
    console.log('Skip = ');
}
else if(Letter1 === 'Small Double' && Letter2 === 'Small Double' && Letter3 === 'Small Single'){
    console.log('Add = Big Double, Big Single');
    console.log('Skip = ');
}






// Y -------else so add more condition
else{
    console.log('Not added yet');
}
// y             Big Single
// y             Big Double
// y             Small Single
// y             Small Double
////_------------{  End Hare  }------------////