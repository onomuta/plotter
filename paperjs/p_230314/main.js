var simplex = new SimplexNoise()
var x = simplex.noise3D(1,2,3)

var path = new Path();
path.strokeColor = 'black';
// path.add(new Point(30, 30));
// path.add(new Point(100, 100));


for
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));
path.add(new Point(Math.random()*100, Math.random(100)*100));



path.smooth({ type: 'continuous' });


function onKeyDown(event) {
    if (event.key === "s") {
    downloadAsSVG();
    }
}

function downloadAsSVG(fileName) {
    // use default name if not provided
    fileName = fileName || "output.svg";

    // create a data url of the file
    var svgData = project.exportSVG({ asString: true });
    var url = "data:image/svg+xml;utf8," + encodeURIComponent(svgData);

    // create a link to the data, and "click" it
    var link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
}