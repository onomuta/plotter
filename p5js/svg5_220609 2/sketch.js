createSVG(600, 300)
precision(2)
// randomSeed(3)
noFill()
noStroke()
stroke(0)
strokeWeight(0.3)

// translate(4, 4)
// translate(width / 4, height / 2)


strokeWeight(0.2)
// circle(0, 0, 2)
// circle(50, 50, 2)
// circle(100, 0, 2)
// circle(150, -50, 2)
// circle(200, 0, 2)
// line(0, 0, 50, 50)
// line(100, 0, 50, 50)
// line(100, 0, 150, -50)
// line(200, 0, 150, -50)

strokeWeight(0.4)

// beginShape()
// vertex(0, 0)
// quadraticVertex(50, 50, 100, 0)
// quadraticVertex(150, -50, 200, 0)
// quadraticVertex(250, 50, 300, 0)

// endShape()











beginGroup()
for (let i = 0; i < 10; i++) {
  x=random(600);
  y=random(300);
  circle(x, y, random(20,150))
  circle(x, y, random(20,150))
}
endGroup()




render()
