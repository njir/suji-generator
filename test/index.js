'use strict'

var suji = require('../')
var test = require('tape')

test('awesome:test', function (t) {
  t.ok(suji() === 'awesome')
  t.end()
})
