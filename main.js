noseX = 0
noseY = 0
difference = 0
leftWristX = 0
rightWristX = 0

function setup(){
    video = createCapture(VIDEO)
    video.size(500, 500)


    canvas = createCanvas(500, 500)
    canvas.position(550, 250)
    
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("model loaded")
}


function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = leftWristX - rightWristX
        console.log(leftWristX)
    }    
}


function draw(){
    background("red")
    fill("yellow")
    stroke("red")
    textSize(difference)
    text("Hello", noseX, noseY)
}