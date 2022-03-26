/*
 * @Description:
 * @Author: HuGang
 * @Date: 2022-03-26 19:18:26
 * @LastEditTime: 2022-03-26 19:40:56
 */

const Router = require('@koa/router')
const UserController = require('../controllers/user')

const router = new Router({ prefix: global.routePrefix })

router.get('/user/:id', UserController.userInfo)
router.get('/user/list', UserController.userList)
router.post('/user/register', UserController.register)
router.put('/user/:id', UserController.userUpdate)
router.delete('/user/:id', UserController.userDelete)

module.exports = router
