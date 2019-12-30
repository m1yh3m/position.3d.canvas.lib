const Position2D = require('@m1yh3m/position.2d.canvas.lib')

class Position3D extends Position2D {
  constructor (x = 0, y = 0, z = 0) {
    super(x, y)
    this.z = z
  }

  toArray () {
    return [...super.toArray(), this.z]
  }
}

module.exports = Position3D
