//https://us-central1-appmaker-desktop-new.cloudfunctions.net/web2desk/download/yE9B0N83UsEuiF3kwIkP/windows
/*
colors.bg =#1c1d2f
Colors.result.bg = #1a1a31 rgb(26,26,49);
colors.div = #2f2b3c
colors.div.selected = #232136
colors.pink = #f73057

*/

var STAGE =1;
var wt = 64;
var ag = 12;
var BMI = 12.65;
var bmit;
var a = 1;
var gd;
var cls = 0;
var ht;
var hyt;

function preload() {

}

function setup() {

//    background("red")
    male = createDiv(``);
    male.addClass(`gender1`);
    male.position(8, 10)

    female = createDiv(``);
    female.addClass(`gender2`);
//    female.position(wi, 10)

    height = createDiv(``);
    height.addClass(`height`);
//    height.position(8, width / 1.87)

    tit = createP(`HEIGHT`);
    tit.parent(height)
    tit.addClass(`para`);
//    
      
    
    weight = createDiv(``);
    weight.addClass(`pro`);
//    weight.position(8, window.innerHeight / 1.55)

    age = createDiv(``);
    age.addClass(`pro`);
//    age.position(width / 1.95, window.innerHeight / 1.55);

    tit1 = createP(`WEIGHT`);
    tit1.parent(weight)
    tit1.addClass(`para1`);
    
    tit2 = createP(`AGE`);
    tit2.parent(age)
    tit2.addClass(`para2`);
    
    sld = createSlider(10, 180, 100);
    sld.parent(height);
    sld.addClass(`sld`)

    submit = createButton(`CALCULATE`);
    submit.position(0, window.innerHeight/1.09);
    submit.addClass(`check`)
    submit.mousePressed(change);
    
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
    plus1.mousePressed(add1)
    
    minus1 = createButton("-");
    minus1.addClass(`math`);
    minus1.parent(age)
    minus1.position(width/9,height);
        minus1.mousePressed(sub1)

    tit3 = createP(`Your Result`).class(`la2`)
    tit3.position(0,-878)

        male.position(8, 10)
        female.position(width /2, 10)
        height.position(8, width / 1.87)
        weight.position(8, window.innerHeight / 1.55)
        age.position(width /2, window.innerHeight / 1.55);
        submit.position(0, window.innerHeight / 1.09);
    
    main = createDiv(``).addClass(`didv`);
        main.position(0,-8787);
    
     reSubmit = createButton(`RE-CALCULATE`);
    reSubmit.position(0,-7646547);
    reSubmit.addClass(`check`)
    reSubmit.mousePressed(change1);
    
    
//        bmit.position(23,window.innerHeight/-87565658)
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

function add1(){
    if(wt<99){
    ag++;
    }
}
function sub1(){
    ag--;
}

function change(){
    STAGE = 3;  
    console.log("hi")
}

function change1(){
window.location.reload();
}
function draw() {
    if (STAGE === 0) {
        //        icon.position(width/2,height);

    }
    
    if (STAGE === 1) {

         ht = sld.value();
        no = createP(ht);
        no.parent(height)
        no.position(width /3.25, height / 4)
        no.addClass(`no`);
        
         no1 = createP(wt);
        no1.parent(weight)
        no1.position(width /6, height /-6)
        no1.addClass(`no1`);
        
          no2 = createP(ag);
        no2.parent(age)
        no2.position(width /5.5, height /6)
        no2.addClass(`no1`);

//        if(a===2){
//            bmit.position(width/4.2,-575)
//            tit3.position(10,-887)
//    main.position(10,-6585)
//    reSubmit.position(0, -6875);
//                grade.position(10,-6585)
//        }
    }
if(STAGE === 3){
    a=2
            male.position(8, -474774)
        female.position(width /2,-474774 )
        height.position(8,-474774)
        weight.position(8, -474774)
        age.position(width /2, -474774);
        submit.position(0, -474774);
        no.position(width / 2.5, -474774 )
        no1.position(width /6, )
        no2.position(width /5.5,-474774 )
    tit3.position(10,window.innerHeight/20)
    main.position(10,window.innerHeight/6)
    reSubmit.position(0, window.innerHeight/1.09);
//bmit.parent(main);
    hyt = ht*ht/100
    console.log(hyt)
    BMI = wt/(hyt/100)
    bmit = createP(nfc(BMI,2)).addClass(`no8`)
    bmit.position(width/4,height/25)
    if(BMI>=25){
        gd  = "OVERWEIGHT";
        cls = 1;
    }else if(BMI>=18.5){
        gd  = "NORMAL"
        cls = 2;
    }else{
         gd  = "UNDERWEIGHT"
        cls = 3;
    }
    grade = createP(gd);
    grade.position(width/2.9,window.innerHeight/5);
                   grade.addClass(`texxt`)
    if(cls ===2){
    grade.style(`color`,`lime`)
        com = createP(`You have normal body weight.  Good Job!`).addClass(`msg`).parent(main).position(width/796,window.innerHeight/2.02)
    }
     if(cls ===1){
    grade.style(`color`,`red`)
       com =  createP(`You have higher than normal body weight. Try to exercise more!`).addClass(`msg`).parent(main).position(width/796,window.innerHeight/2.02)
    }
    
     if(cls ===3){
    grade.style(`color`,`orange`)
      com =   createP(`You have less than normal body weight.  You can eat a bit more!`).addClass(`msg`).parent(main).position(width/796,window.innerHeight/2.02)
    }
}

}
