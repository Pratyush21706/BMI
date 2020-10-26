//https://us-central1-appmaker-desktop-new.cloudfunctions.net/web2desk/download/yE9B0N83UsEuiF3kwIkP/windows
/*
colors.bg =#1c1d2f
Colors.result.bg = #1a1a31 rgb(26,26,49);
colors.div = #2f2b3c
colors.div.selected = #232136
colors.pink = #f73057

*/

const STAGE = 1;
var wt = 96,ag = 1;

function preload() {

}

function setup() {
    noCanvas();
    male = createDiv(``);
    male.addClass(`gender1`);
    male.position(8, 10)

    female = createDiv(``);
    female.addClass(`gender2`);
    female.position(width / 1.89, 10)

    height = createDiv(``);
    height.addClass(`height`);
    height.position(8, width / 1.87)

    tit = createP(`HEIGHT`);
    tit.parent(height)
    tit.addClass(`para`);
//    
      
    
    weight = createDiv(``);
    weight.addClass(`pro`);
    weight.position(8, window.innerHeight / 1.55)

    age = createDiv(``);
    age.addClass(`pro`);
    age.position(width / 1.89, window.innerHeight / 1.55);

    tit1 = createP(`WEIGHT`);
    tit1.parent(weight)
    tit1.addClass(`para1`);
    
    tit2 = createP(`AGE`);
    tit2.parent(age)
    tit2.addClass(`para2`);
    
    sld = createSlider(10, 180, 10);
    sld.parent(height);
    sld.addClass(`sld`)

    submit = createButton(`Calculate`);
    submit.position(0, window.innerHeight/1.09);
    submit.addClass(`check`)
    
    plus = createButton("+");
    plus.addClass(`math`);
    plus.parent(weight)
    plus.position(width/4,height);
    plus.mousePressed(add)
    
    minus = createButton("-");
    minus.addClass(`math`);
    minus.parent(weight)
    minus.position(width/10,height);
        minus.mousePressed(sub)
    
    plus1 = createButton("+");
    plus1.addClass(`math`);
    plus1.parent(age)
    plus1.position(width/4,height);
    plus1.mousePressed(add)
    
    minus1 = createButton("-");
    minus1.addClass(`math`);
    minus1.parent(age)
    minus1.position(width/9,height);
        minus1.mousePressed(sub)


    //    ageI = createInput(`0`).attribut
    //    submit.addClass(`button`)
}
function add(){
    if(wt<99){
    wt++;
    }
}
function sub(){
    wt--;
}
function draw() {
    if (STAGE === 0) {
        //        icon.position(width/2,height);

    }
    if (STAGE === 1) {
        male.position(8, 10)
        female.position(width / 1.85, 10)
        height.position(8, width / 1.87)
        weight.position(8, window.innerHeight / 1.55)
        age.position(width / 1.85, window.innerHeight / 1.55);
        submit.position(0, window.innerHeight / 1.09);
        let ht = sld.value();
        no = createP(ht);
        no.parent(height)
        no.position(width / 2.5, height / 4)
        no.addClass(`no`);
        
         no1 = createP(wt);
        no1.parent(weight)
        no1.position(width /6, height /-6)
        no1.addClass(`no1`);
        
          no2 = createP("15");
        no2.parent(age)
        no2.position(width /5.5, height /6)
        no2.addClass(`no1`);
    }


}
