function setup() {
  canvas = createCanvas(200, 170);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelloaded);

}
function draw(){
  image(video,0,0,200,170);
classifier.classify(video,gotResult);
}
function modelloaded(){
  console.log("model is loaded");

}
function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result_object").innerHTML=results[0].label;
    document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
}



