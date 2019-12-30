/* global describe it expect */

const Position3D = require('../position.3d')

describe('Position3D', () => {
  it('is a class', () => {
    const expected = 'function'
    const actual = typeof Position3D
    expect(actual).toEqual(expected)
  })

  it('object has default x, y and z values of 0', () => {
    const pos = new Position3D()
    const expected = 0
    expect(pos.x).toEqual(expected)
    expect(pos.y).toEqual(expected)
    expect(pos.z).toEqual(expected)
  })

  it('object has method "toArray()" that returns [x, y, z]', () => {
    const pos = new Position3D()
    const expectedArray = [0, 0, 0]
    const expectedType = 'function'
    expect(typeof pos.toArray).toEqual(expectedType)
    expect(pos.toArray()).toEqual(expectedArray)
  })

  it('object has method "toArray()" that returns [x, y, z] when passed explicit values to constructor', () => {
    const pos = new Position3D(10, 20, 30)
    const expectedArray = [10, 20, 30]
    const expectedType = 'function'
    expect(typeof pos.toArray).toEqual(expectedType)
    expect(pos.toArray()).toEqual(expectedArray)
  })
})
