createSVG(200, 200)
precision(2)
// randomSeed(3)
// background(210)
noFill()
// strokeWidth(2)
// fill(200)


noStroke()
stroke(0)
strokeWeight(0.5)


translate(4, 4)
// translate(width / 2, 0)

beginGroup()
for (let ix = 0; ix < 12; ix++) {
  push()
  translate(ix * 8, 0)

  for (let iy = 0; iy < 18; iy++) {
    push()

    translate(0, iy * 8)

    xp = 0
    yp = 0
    s = 10
    beginShape()
    vertex(0, 0)
    r = random(8)
    // arc(0, 0, r, r, 0, random(360))
    // circle(0, 0, 2)
    for (let j = 0; j < 25; j++) {
      x = random(s) - s / 2
      y = random(s) - s / 2

      if (j % 2 == 0) {
        xp = xp + x
        xp = Math.max(xp, -3)
        xp = Math.min(xp, 3)
      } else {
        yp = yp + y
        yp = Math.max(yp, -3)
        yp = Math.min(yp, 3)
      }
      vertex(xp, yp)


    }
    endShape()
    pop()

  }
  pop()

}
endGroup()

// beginGroup()
// stroke(0, 130, 130)
// for (let i = 0; i < 20; i++) {
//   for (let j = 0; j < 20; j++) {
//     push()
//     translate(i * 10, j * 10)

//     circle(5, 5, (noise(i / 10, j / 10) + 1) * 4.5 + 1)
//     // circle(5, 5, (noise(i / 10, j / 10) + 1) * 2)

//     if (noise(i / 10, j / 10) < 0.5) {
//     } else {
//     }
//     pop()
//   }
// }
// endGroup()





render()


function guide() {
  strokeWeight(0.1)
  rect(0, 0, 10, 10)
  strokeWeight(0.5)
}