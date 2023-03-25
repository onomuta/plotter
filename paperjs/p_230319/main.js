// var simplex = new SimplexNoise()
// var x = simplex.noise3D(1,2,3)



// for(var j = 0; j<30; j++){
//     var path = new Path();
//     path.strokeColor = 'black';
//     for(var i = 0; i<100; i++){
//         x = (simplex.noise3D(i/22.345,j/11,311)+1)/2*40 + j*8
//         path.add(new Point(x, i*4));
//     }
//     <!-- path.simplify(100); -->
    
// }


// console.log(path)


// // if (path.data.color === child.data.color) {
// //     let newPath = path.unite(child)
// //     path.remove()
// //     path = newPath
// //     itemsToRemove.push(child)
// // } else {
// //     if (eraseOthers) {
// //         const newChild = child.subtract(path, {insert: false})
// //         if (newChild.isEmpty()) {
// //             itemsToRemove.push(child)
// //         } else {
// //             child.replaceWith(newChild)
// //         }
// //     }
// // }




var path = new Path();
path.strokeColor = 'black';

// path.add(firstPoint);
// // // The point through which we will create the arc:
// var throughPoint = new Point(40, 40);
// // // The point at which the arc will end:
// var toPoint = new Point(130, 75);
// // // Draw an arc through 'throughPoint' to 'toPoint'
// path.arcTo(throughPoint, toPoint);
// path.closed = true;

var path = new Path.Circle(new Point(80, 50), 30);
path.strokeColor = 'black';

throughPoint = new Point(10, 80);
var circle = new Path.Circle(throughPoint, 20);
var new_path = path.unite(circle)
path.remove()
path = new_path
circle.remove()


for(var i = 0 ; i < 200 ; i++){
    throughPoint = new Point(Math.random()*400, Math.random()*400);
    circle = new Path.Circle(throughPoint, Math.random()*Math.random()*45+5);
    var new_path = path.unite(circle)
    path.remove()
    path = new_path
    circle.remove()
    
}

throughPoint = new Point(200,200);
circle = new Path.Circle(throughPoint,200);
// var new_path = path.unite(circle)
var new_path = path.intersect(circle)
path.remove()
path = new_path
circle.remove()






//  path.smooth({ type: 'continuous' });








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