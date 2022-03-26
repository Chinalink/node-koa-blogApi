/*
 * @Description:
 * @Author: HuGang
 * @Date: 2022-03-25 14:22:58
 * @LastEditTime: 2022-03-26 18:37:27
 */
const { DataTypes, Model } = require('sequelize')
const sequelize = require('../core/db')

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // 主键
      autoIncrement: true, // 自增
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '用户名',
    },
    password: {
      type: DataTypes.STRING,
      comment: '用户密码',
    },
    nickName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: '用户昵称',
    },
    avatar: {
      type: DataTypes.STRING,
      comment: '用户头像',
    },
    email: {
      type: DataTypes.STRING(128),
      comment: '用户邮箱',
    },
    qq: {
      type: DataTypes.STRING,
      comment: 'QQ号',
    },
    wechart: {
      type: DataTypes.STRING,
      comment: '微信号',
    },
    github: {
      type: DataTypes.STRING,
      comment: 'github地址',
    },
    introduce: {
      type: DataTypes.STRING,
      comment: '个人说明',
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        const time = this.getDataValue('createdAt')
        return global.dayjs(time).format('YYYY-MM-DD HH:mm')
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        const time = this.getDataValue('updatedAt')
        return global.dayjse(time).format('YYYY-MM-DD HH:mm')
      },
    },
  },
  {
    sequelize, // 连接实例
    modelName: 'User', // 模型名称
  },
)

module.exports = User
