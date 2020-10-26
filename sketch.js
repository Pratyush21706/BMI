//https://us-central1-appmaker-desktop-new.cloudfunctions.net/web2desk/download/yE9B0N83UsEuiF3kwIkP/windows
/*
colors.bg =#1c1d2f
Colors.result.bg = #1a1a31 rgb(26,26,49);
colors.div = #2f2b3c
colors.div.selected = #232136
colors.pink = #f73057

*/

const STAGE = 0;

function preload(){
    
}
function setup(){
    noCanvas();
  male = createDiv(``);
    male.addClass(`gender1`);
    male.position(8,10)
    
    female = createDiv(``);
    female.addClass(`gender2`);
    female.position(width/1.85,10)
    
    height = createDiv(``);
        height.addClass(`height`);
    height.position(8,width/1.87)
    
     weight = createDiv(``);
    weight.addClass(`pro`);
    weight.position(8,window.innerHeight/1.55)
    
    age = createDiv(``);
    age.addClass(`pro`);
    age.position(width/1.85,window.innerHeight/1.55);
    
    sld = createSlider();
    sld.parent(height);
    sld.addClass(`sld`)
    
    submit = createButton(`Calculate`);
    submit.position(0,window.innerHeight/1.09);
//    submit.addClass(`button`)
}
function draw(){
    if(STAGE ===0){
//        icon.position(width/2,height);
        
    }
    if(STAGE===1){
            male.position(8,10)
    female.position(width/1.85,10)
    height.position(8,width/1.87)
    weight.position(8,window.innerHeight/1.55)
    age.position(width/1.85,window.innerHeight/1.55);
    submit.position(0,window.innerHeight/1.09);

    }
    
    drawSprites();
}