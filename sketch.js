var wieght = [10, 20, 30, 40, 50]
var sum, avrage

function wieghtavg() {
    sum = wieght[0] + wieght[1] + wieght[2] + wieght[3] + wieght[4]
    avrage = sum / wieght.length
    console.log(avrage)
}

function setup()

{
    createCanvas(400, 400);
    wieghtavg()
}

function draw() {
    background(51);

}