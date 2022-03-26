/*
 * @Description:
 * @Author: HuGang
 * @Date: 2022-03-26 19:31:33
 * @LastEditTime: 2022-03-26 19:33:36
 */
class UserController {
  static async userList(ctx, next) {
    return (ctx.body = { code: 200, message: 'success' })
  }

  static async userUpdate(ctx, next) {
    return (ctx.body = { code: 200, message: 'success' })
  }

  static async userInfo(ctx, next) {
    return (ctx.body = { code: 200, message: 'success' })
  }

  static async register(ctx, next) {
    return (ctx.body = { code: 200, message: 'success' })
  }

  static async userDelete(ctx, next) {
    return (ctx.body = { code: 200, message: 'success' })
  }
}

module.exports = UserController
