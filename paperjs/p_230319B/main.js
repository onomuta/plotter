
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
var path2 = new Path();
path.strokeColor = 'black';

// path.add(firstPoint);
// // // The point through which we will create the arc:
// var posPoint = new Point(40, 40);
// // // The point at which the arc will end:
// var toPoint = new Point(130, 75);
// // // Draw an arc through 'posPoint' to 'toPoint'
// path.arcTo(posPoint, toPoint);
// path.closed = true;

// var path = new Path.Circle(new Point(80, 50), 30);

// posPoint = new Point(10, 80);
// var circle = new Path.Circle(posPoint, 20);
// var new_path = path.unite(circle)
// path.remove()
// path = new_path
// circle.remove()


for(var i = 0 ; i < 300 ; i++){
    posPoint = new Point(Math.random()*800, Math.random()*800);
    r =  Math.random()*Math.random()*85+5
    circle = new Path.Circle(posPoint, r);
    var new_path = path.unite(circle)
    path.remove()
    path = new_path
    circle.remove()


    circle2 = new Path.Circle(posPoint, r/2);
    var new_path2 = path2.unite(circle2)
    path2.remove()
    path2 = new_path2
    circle2.remove()
    
}

posPoint = new Point(200,200);
maskCircle = new Path.Circle(posPoint,200);
maskCircle_B = new Path.Circle(posPoint,200);

posPoint = new Point(400,500);
maskCircle2 = new Path.Circle(posPoint,300);
maskCircle2_B = new Path.Circle(posPoint,300);

var maskCircles = maskCircle.unite(maskCircle2)
var maskCircles2 = maskCircle_B.unite(maskCircle2_B)


var new_path = path.intersect(maskCircles)
var new_path2 = path2.intersect(maskCircles2)

new_path.strokeColor = 'black';
new_path2.strokeColor = 'red';



path.remove()
path2.remove()
// path = new_path
// path2 = new_path2
// circle.remove()






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