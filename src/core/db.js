/*
 * @Description:
 * @Author: HuGang
 * @Date: 2022-03-25 14:07:04
 * @LastEditTime: 2022-03-25 14:18:02
 */
const { Sequelize } = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize('blog', 'root', '123456', config.db)

// 创建模型
// sequelize.sync({})

module.exports = sequelize
