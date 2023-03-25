var paths = []
var num = 5
var path1 = new Path()
var path2 = new Path()
var path3 = new Path()
var path4 = new Path()
var path5 = new Path()
paths.push(path1)
paths.push(path2)
paths.push(path3)
paths.push(path4)
paths.push(path5)


for(var i = 0 ; i < 130 ; i++){
    posPoint = new Point(Math.random()*800, Math.random()*800)
    r =  Math.random()*Math.random()*140+20

    for(var j = 0; j < num;j++){
        circle = new Path.Circle(posPoint, r*((j+1)/num))
        hoge = paths[j].unite(circle)
        paths[j].remove()
        paths[j] = hoge
        circle.remove()
    }

}


console.log(paths)


posPoint = new Point(200,200);
maskCircle = new Path.Circle(posPoint,200);
posPoint = new Point(400,500);
maskCircle2 = new Path.Circle(posPoint,300);
var maskCircles = maskCircle.unite(maskCircle2)
maskCircle.remove()
maskCircle2.remove()


var comp_path =[0,0,0,0]


for(var j = 0; j < num;j++){
    comp_path[j] = paths[j].intersect(maskCircles)
    paths[j].remove()
    maskCircles.remove()

    // paths[j].strokeColor = 'green';
    comp_path[j].strokeColor = 'blac';
}

// maskCircles.remove()
paths.strokeColor = 'red';
// comp_path.strokeColor = 'red';




// paths.remove()








// <!-- sキーで保存 -->
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