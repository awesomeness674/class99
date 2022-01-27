var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML=""
recognition.start()

}
recognition.onresult=function run(event){
console.log(event)
var Content = event.results[0][0].transcript;
 document.getElementById("textbox").innerHTML = Content;
 if(Content=="take my selfie"){
 console.log("taking selfie")
 speak();
 }
}
function speak(){
var synth = window.speechSynthesis;//We are storing the speech synthesis's Api's in a synth Variable
var speak_data="Taking your selfies in 5 seconds";
var utterthis = new SpeechSynthesisUtterance(speak_data);//var john = new human()
synth.speak (utterthis);//speak is your ready made which is stored inside an API.
Webcam.attach(camera);

setTimeout(function(){
take_snapshot();
save();    

}, 5000);
}
camera = document.getElementById("camera");//divison who's id is camera is storing inside a camera variable
Webcam.set({
width:360,
height:250,
image_format : 'jpeg',
jpeg_quality:90 });

function take_snapshot () {
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>'

});

}
function save(){
link = document.getElementById("link");
img = document.getElementById("selfie").src//We are getting data_url value inside a img tag
link.href=img;
link.click();

}