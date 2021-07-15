song="";
song1="";
scoreRightWrist=0;
RightWristX=0;
RightWristY=0;
LeftWristX=0;
LeftWristY=0;

function setup(){
    canvas=createCanvas(600 , 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);

}

function modelLoaded(){
    console.log("poseNet Is Intialized");
}
function preload(){
    song=loadSound("music.mp3");
    song1=loadSound("music2.mp3");
}

function draw(){
    image(video , 0 , 0 , 600 , 500 );
    fill("#FF0000");
    stroke("#FF0000");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
       
        LeftWristX=results[0].pose.leftWrist.x;
        LeftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristx"+LeftWristX+"leftWristY"+LeftWristY);

        RightWristX=results[0].pose.rightWrist.x;
        RightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristx"+RightWristX+"rightWristY"+RightWristY);
    }
}