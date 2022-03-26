/*
 * @Description:
 * @Author: HuGang
 * @Date: 2022-03-25 12:51:35
 * @LastEditTime: 2022-03-25 14:22:03
 */
const config = {
  db: {
    host: 'localhost', // 数据库主机
    port: '3306', // 端口
    protocol: 'tcp', // 协议
    dialect: 'mysql', // 数据库类型
    pool: {
      max: 5, // 最大连接数量
      min: 0, // 最小连接数量
      idle: 10000, // 连接空置时间（毫秒），超时后将释放连接
    },
    // 设置自动查询时的重试标志
    retry: {
      max: 3, // 设置重试次数
    },
    omitNull: false, //  null 是否通过SQL语句查询
    timezone: '+08:00', //  解决时差 - 默认存储时间存在8小时误差
    define: {
      underscored: true, // 驼峰命名转换为下划线
    },
  },
}

module.exports = config
