createSVG(200, 200)
precision(2)
// randomSeed(3)
noFill()
noStroke()
stroke(0)
strokeWeight(0.3)

// translate(4, 4)
translate(width / 2, height / 2)

beginGroup()
for (let i = 0; i < 100; i++) {
  x = Math.sin(i / 15.9) * 50
  y = Math.cos(i / 15.9) * 50
  // circle(x, y, 4)

  shift = random(2)
  // shift = 0.4
  x2 = Math.sin(i / 15.9 + shift) * 50
  y2 = Math.cos(i / 15.9 + shift) * 50
  // circle(x2, y2, 4)

  bure = 50
  bureX = random(bure) - bure / 2
  bureY = random(bure) - bure / 2
  beginShape()
  vertex(x, y)
  quadraticVertex(bureX, bureY, x2, y2)
  endShape()

}
endGroup()




render()
