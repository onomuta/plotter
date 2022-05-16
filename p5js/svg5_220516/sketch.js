createSVG(200, 200)
precision(2)
// randomSeed(3)
// background(210)
noFill()
// strokeWidth(2)
// fill(200)

noStroke()
stroke(0)
strokeWeight(0.3)

translate(4, 4)
// translate(width / 2, 0)

beginGroup()
for (let ix = 0; ix < 20; ix++) {
  push()
  translate(ix * 8, 0)

  for (let iy = 0; iy < 20; iy++) {
    push()

    translate(0, iy * 8)

    xp = 0
    yp = 0
    s = 10
    beginShape()
    vertex(random(10), random(10), random(10), random(10), random(10), random(10))
    // vertex(0, 0)
    r = random(8)
    // arc(0, 0, r, r, 0, random(360))
    // circle(0, 0, 2)
    comp = Math.floor(random(2) + 1)
    comp = 2
    for (let j = 0; j < comp; j++) {
      x = random(s) - s / 2
      y = random(s) - s / 2

      yp = yp + y
      xp = xp + x

      // if (j % 2 == 0) {
      //   xp = xp + x
      //   // xp = Math.max(xp, -3)
      //   // xp = Math.min(xp, 3)
      // } else {
      //   yp = yp + y
      //   // yp = Math.max(yp, -3)
      //   // yp = Math.min(yp, 3)
      // }
      bezierVertex(random(8), random(8), xp, yp, random(8), random(8))


    }
    endShape()
    pop()

  }
  pop()

}
endGroup()




render()
