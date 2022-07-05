leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

Legends_Never_Die="";
Fly_Away="";

function preload(){
    Legends_Never_Die=loadSound("Legends Never Die.mp3");
    Fly_Away=loadSound("TheFatRat-Fly Away.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = " + rightWristY);
    }
}
function modeLoaded() {
    console.log("PoseNet is Initialized");
}