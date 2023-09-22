function buildBase () {
  agent.setAssist(DESTROY_OBSTACLES, true)
  for (let i = 0; i <= wallLength - 1; i++) {
      agent.teleport(pos(i + xOffset, 0 + yOffset, comfortOffset + zOffset), NORTH)
      layBricks("Forward")
  }
  agent.setAssist(DESTROY_OBSTACLES, false)
}
function makeRed () {
  currentColor = "Red"
  buildBase()
  buildNumberBlock()
}
function makeOrange() {
  xOffset += 5 + wallLength - 2
  currentColor = "Orange"
  buildBase()
  let numBlocks = 3
  let blocksBuilt = 0
  for (let i=0; i<numBlocks-1; i++){
      buildNumberBlock()
      yOffset += 3 + wallLength - 2
      blocksBuilt ++
  }
  buildNumberBlock()
  yOffset += 0 - (blocksBuilt * 3) // 3 is the comfort level between blocks, should be a var
}
function makeYellow () {
  xOffset += 5 + wallLength - 2
  currentColor = "Yellow"
  buildBase()
  buildNumberBlock()
  yOffset += 3 + wallLength - 2
  buildNumberBlock()
  yOffset += 3 + wallLength - 2
  buildNumberBlock()
  yOffset += 0 - 6
}
function makeBlue() {
  xOffset += 5 + wallLength - 2
  currentColor = "Blue"
  buildBase()
  buildNumberBlock()
  yOffset += 3 + wallLength - 2
  buildNumberBlock()
  yOffset += 3 + wallLength - 2
  buildNumberBlock()
  yOffset += 3 + wallLength - 2
  buildNumberBlock()
  yOffset += 3 + wallLength - 2
  buildNumberBlock()
  yOffset += 0 - 12
}
function makeGreen() {
  xOffset += 5 + wallLength - 2
  currentColor = "Green"
  buildBase()
  buildNumberBlock()
  yOffset += 3 + wallLength - 2
  buildNumberBlock()
  yOffset += 3 + wallLength - 2
  buildNumberBlock()
  yOffset += 3 + wallLength - 2
  buildNumberBlock()
  yOffset += 0 - 9
}
function layBricks (faceDir: string) {
  agent.setAssist(PLACE_ON_MOVE, true)
  if (currentColor == "Red") {
      agent.setItem(RED_CONCRETE, wallLength, 1)
  } else if (currentColor == "Orange") {
      agent.setItem(ORANGE_CONCRETE, wallLength, 1)
  } else if (currentColor == "Yellow") {
      agent.setItem(YELLOW_CONCRETE, wallLength, 1)
  } else if (currentColor == "Green") {
      agent.setItem(LIME_CONCRETE, wallLength, 1)
  } else if (currentColor == "Blue") {
      agent.setItem(LIGHT_BLUE_CONCRETE, wallLength, 1)
  } else if (currentColor == "Violet") {
      agent.setItem(MAGENTA_CONCRETE, wallLength, 1)
  } else {
      agent.setItem(PURPLE_CONCRETE, wallLength, 1)
  }
  if (faceDir == "Right") {
      agent.move(RIGHT, wallLength)
  } else {
      agent.move(FORWARD, wallLength)
  }
  agent.setAssist(PLACE_ON_MOVE, false)
}
player.onChat("tp", function (x, y, z) {
  agent.teleport(pos(x, y, z), NORTH)
})
function buildFrontWall () {
  agent.setAssist(DESTROY_OBSTACLES, true)
  for (let m = 0; m <= wallLength - 1; m++) {
      agent.teleport(pos(0 + xOffset, m + 1 + yOffset, 1 + comfortOffset + zOffset), NORTH)
      layBricks("Right")
  }
  agent.setAssist(DESTROY_OBSTACLES, false)
}
player.onChat("gg", function () {
  makeRed()
  makeOrange()
  makeYellow()
})
function buildLeftWall () {
  agent.setAssist(DESTROY_OBSTACLES, true)
  for (let k = 0; k <= wallLength - 1; k++) {
      agent.teleport(pos(-1 + xOffset, k + 1 + yOffset, comfortOffset + zOffset), NORTH)
      layBricks("Forward")
  }
  agent.setAssist(DESTROY_OBSTACLES, false)
}
function buildRightWall () {
  agent.setAssist(DESTROY_OBSTACLES, true)
  for (let j = 0; j <= wallLength - 1; j++) {
      agent.teleport(pos(wallLength + xOffset, j + 1 + yOffset, comfortOffset + zOffset), NORTH)
      layBricks("Forward")
  }
  agent.setAssist(DESTROY_OBSTACLES, false)
}
function buildTopWall () {
  agent.setAssist(DESTROY_OBSTACLES, true)
  for (let l = 0; l <= wallLength - 1; l++) {
      agent.teleport(pos(l + xOffset, wallLength + 1 + yOffset, comfortOffset + zOffset), NORTH)
      layBricks("Forward")
  }
  agent.setAssist(DESTROY_OBSTACLES, false)
}
function buildBackWall () {
  agent.setAssist(DESTROY_OBSTACLES, true)
  for (let n = 0; n <= wallLength - 1; n++) {
      agent.teleport(pos(0 + xOffset, n + 1 + yOffset, comfortOffset - wallLength + zOffset), NORTH)
      layBricks("Right")
  }
  agent.setAssist(DESTROY_OBSTACLES, false)
}
function buildNumberBlock () {
  buildLeftWall()
  buildRightWall()
  buildBackWall()
  buildTopWall()
  buildFrontWall()
}
let currentColor = ""
let zOffset = 0
let yOffset = 0
let xOffset = 0
let comfortOffset = 0
let wallLength = 0
let num3 = 0
wallLength = 2
comfortOffset = -3
