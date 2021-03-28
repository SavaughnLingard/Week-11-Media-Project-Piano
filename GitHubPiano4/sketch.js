function setup(){
    createCanvas(innerWidth, innerHeight*2);
    background('White');
    
 osc = new p5.Oscillator();
 osc.setType('sine');
 osc.freq(0);
osc.amp(1000);
osc.start();
    
      //White keys
    for(let i = 0; i<14; i++){
        fill('white');
    rect(75+i*45,120, 45, 350, 0, 0, 12, 12);
    }
    //Black keys x2
    for(let j = 0; j<2; j++){
        fill('black');
 rect(100+j*50,120, 35, 175, 0, 0, 6, 6);
 rect(415+j*50,120, 35, 175, 0, 0, 6, 6);
    }
    //Black keys x3
     for(let x = 0; x<3; x++){
        fill('black');
     rect(230+x*50,120, 35, 175, 0, 0, 6, 6);
     rect(545+x*50,120, 35, 175, 0, 0, 6, 6);
   


     }
    
}
    
function draw(){
    
    if(mouseX>75 && mouseX<110 && mouseY>120 && mouseY<470 && mouseIsPressed) {
        osc.freq(130.8128);
        osc.amp(1000, .05);
    }
 }
    
    

