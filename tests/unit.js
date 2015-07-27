var assert = require("assert")
var syrpc = require("../main")
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5))
      assert.equal(-1, [1,2,3].indexOf(0))
    })
  })
})

describe('Basics', function() {
  describe('Create Server', function () {
    it('the server should have a get_request and a put_result method', function () {
      server = new syrpc.SyRPCServer()
      assert.equal(typeof server.hello, "function")
    })
  })
})
