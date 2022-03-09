function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,510)
    canvas.position(560,510);
   
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#FFCAED');
}

function modelLoaded()
{
    console.log('PoseNet is Initialized!!');
}

distance = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
    
        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "distance = " + difference);
    }
}

function draw() 
{
    document.getElementById("my_name").inneHTML = "Width And Height ofmy name will be  = " + difference + "px";"
}

