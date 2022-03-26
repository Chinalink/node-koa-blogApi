/*
 * @Description:
 * @Author: HuGang
 * @Date: 2022-03-25 12:26:33
 * @LastEditTime: 2022-03-26 19:26:23
 */
const dayjs = require('dayjs')
const Router = require('@koa/router')
const requireDirectory = require('require-directory')

class InitManager {
  static initCore(app) {
    InitManager.app = app
    InitManager.mountGlobal()
    InitManager.loadRoutes()
  }

  static mountGlobal() {
    global.dayjs = dayjs
    global.routePrefix = '/apis/v1'
  }

  static loadRoutes() {
    const routesDirectory = `${process.cwd()}/src/routers`
    // 通过requireDirectory自动加载全部路由
    requireDirectory(module, routesDirectory, {
      visit: function (obj) {
        if (obj instanceof Router) {
          InitManager.app.use(obj.routes())
        }
      },
    })
  }
}

module.exports = InitManager
