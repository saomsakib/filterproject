noseX = 0;
noseY = 0;
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-47;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    } 
    console.log(results);
    console.log("nose x = "  + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/jSj4hYw3/beard-png-image-beard-png-image-6.png');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    
    image(clown_nose, noseX, noseY, 100, 100);
}

function take_snapshot()
{
    save('myFilterImage.png');
}