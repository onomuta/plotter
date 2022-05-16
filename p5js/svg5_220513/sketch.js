createSVG(200, 200)
precision(2)

// background(210)
noFill()
// strokeWidth(2)
// fill(200)


noStroke()
stroke(0)
strokeWeight(0.5)

beginGroup()
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    push()
    translate(i * 10, j * 10)
    line(-1, 0, 1, 0)
    line(0, -1, 0, 1)


    translate(5, 5)
    rotate(noise(i / 10, j / 10) * 90)
    scale((noise(i / 10, j / 10) + 1) / 2)
    line(-5, 0, 5, 0)

    if (noise(i / 10, j / 10) < 0.5) {
    } else {
    }
    pop()
  }
}
for (let i = 0; i < 20; i++) {
  push()
  translate(i * 10, height)
  line(-1, 0, 1, 0)
  line(0, -1, 0, 1)
  pop()
}
for (let j = 0; j < 20; j++) {
  push()
  translate(width, j * 10)
  line(-1, 0, 1, 0)
  line(0, -1, 0, 1)
  pop()
}
endGroup()

beginGroup()
stroke(0, 130, 130)
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    push()
    translate(i * 10, j * 10)

    circle(5, 5, (noise(i / 10, j / 10) + 1) * 4.5 + 1)
    // circle(5, 5, (noise(i / 10, j / 10) + 1) * 2)

    if (noise(i / 10, j / 10) < 0.5) {
    } else {
    }
    pop()
  }
}
endGroup()





render()


function guide() {
  strokeWeight(0.1)
  rect(0, 0, 10, 10)
  strokeWeight(0.5)
}