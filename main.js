song="";

leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
function setup() 
{
canvas=createCanvas(600,500);
canvas.position(470,200);
vi=createCapture(VIDEO);
vi.hide();
psnt = ml5.poseNet(vi,modalloaded);
psnt.on('pose',gotposes);
}
function draw() {
image(vi,0,0,700,600);

fill("#FF6347");
stroke("#FF6347");

circle(rightwristx,rightwristy,30);
circle(leftwristx,leftwristy,30);

}
function preload() 
{
song=loadSound("music.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modalloaded()
{
   console.log("pisin")
}

function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreleftwristy=results[0].pose.keypoints[9].score;
        console.log("slwy="+scoreleftwristy);
        scorerightwristy=results[0].pose.keypoints[10].score;
        console.log("srwy="+scorerightwristy);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("leftwisx= "+leftwristx+"leftwisy="+leftwristy+"rightwisx="+rightwristx+"rightwisy="+rightwristy);
    }
}
