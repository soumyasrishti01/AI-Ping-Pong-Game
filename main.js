rightWrist_x = "";
rightWrist_y = "";
rightWrist_score = "";

function preload() {
    canvas = createCanvas(800, 800);
    canvas.parent('canvas');
    canvas.center();
    video = createCapture(VIDEO);
    video.size(800, 800);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotPoses(results) {
    if (results.length > 0) {

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;

        rightWrist_score = results;
    }
}

function StartGame() {

}

function RestartGame() {

}

function draw() {
    if(rightWrist_score > 0.2){
        fill("red");
        stroke("red");
        circle(rightWrist_x, rightWrist_y, 20);
    }
    image(video, 0, 0, 800, 800);
}