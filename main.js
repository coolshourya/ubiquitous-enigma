var SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").value=content;
    console.log(content);
    if(content=="Take my selfie."){
        speak(); 
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speakData = "taking your selfie in 5 seconds";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        oh_snap();
          save();
    },5000);
}
Webcam.set({
    width:300,
    height:300,
    image_format:'png'
,
    png_quality:90
});
camera=document.getElementById("camera");

function oh_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}