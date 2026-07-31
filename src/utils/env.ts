/**
 * @file 环境变量
 * @description 判断当前环境是开发环境还是生产环境
 * @author Junlin-W
 */
const environment = process.env.NODE_ENV

const isDEV = environment === 'development'
const isPROD = environment === 'production'
const env = environment

export {
    env,
    isDEV,
    isPROD,
}