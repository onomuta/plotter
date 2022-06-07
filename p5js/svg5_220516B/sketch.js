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

translate(2, 2)
// translate(width / 2, 0)

beginGroup()
for (let ix = 0; ix < 20; ix++) {
  push()
  translate(ix * 10, 0)

  for (let iy = 0; iy < 20; iy++) {
    push()

    translate(0, iy * 10)

    xp = 0
    yp = 0
    s = 10
    beginShape()
    vertex(random(10), random(10), random(10), random(10), random(10), random(10))
    // vertex(0, 0)
    r = random(8)
    // arc(0, 0, r, r, 0, random(360))
    // circle(0, 0, 2)
    // comp = Math.floor(random(10) + 1)
    comp = Math.floor((noise(ix / 7, iy / 7) + 1) * 3 + 0.7)
    // comp = 1
    for (let j = 0; j < comp; j++) {

      quad(random(8), 0, 8, random(8), random(8), 8, 0, random(8))

    }
    endShape()
    pop()

  }
  pop()

}
endGroup()




render()
