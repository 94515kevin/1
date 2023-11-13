var sound1
function preload(){
  sound1 = loadSound("alex-productions-flow.mp3")//先把音樂檔載入到程式碼中
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#a2d2ff")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}
var w = 100
var s_w =40
var fc
function draw() {
  background("#a2d2ff");
  rectMode(CENTER)//捨定方框中心為方框的座標點
  noFill()
  textSize(50)
  text("#412730300",width-300,height-100)
  if(sound1.isPlaying())
  {   //音樂有撥放時
    fc = map(analyzer.getLevel(),0,1,0,100)
  }
  else
  {
   //音樂沒有撥放
    fc = map(mouseX,0,width,0,100)
  }
  for(var y=50;y<=width+50;y=y+w){
  for(var x=50;x<=width+50;x=x+w){
    //畫圓，設定框線顏色與線條粗細
    stroke("#e4c1f9")
    strokeWeight(2)
    ellipse(x,50,w+fc)

    //畫方框，設定框線顏色與色調粗細
    stroke("#ffafcc")
    strokeWeight(2)
    rect(x,y,w+fc)
    noFill()
    stroke("#ffafcc")
    strokeWeight(4)
    ellipse(x+50,y+50,s_w+fc)
}
  }
}



function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}