import assert from 'assert'
import { EnumData } from '../src/index'

describe('EnumData:', () => {
  /**
   * EnumData conflict
   */
  describe('EnumData conflict', () => {
    // 字段冲突、方法名冲突
    const STATUS_MAP = new EnumData([
      ['PAY', 10, '待支付'],
      ['PAYED', 'PAY', '已支付'],
      ['forEach', 30, '每一个'],
    ])

    test('fields reflect', () => {
      assert.strictEqual(STATUS_MAP == '', false)
    })
  })
})
