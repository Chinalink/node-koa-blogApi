/*
 * @Description:
 * @Author: HuGang
 * @Date: 2022-03-24 17:05:45
 * @LastEditTime: 2022-03-26 19:09:59
 */

const Koa = require('koa')
const InitManager = require('./core/init')

const app = new Koa()
InitManager.initCore(app)

app.listen(3000)
