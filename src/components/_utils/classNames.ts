/**
 * 关于类名的方法
 */

import { CLASS_PREFIX } from "./constant";

/**
 * 整理类名前缀，将本地前缀和全局前缀进行连接
 * @param localPrefix
 * @returns
 */
export function formatPrefix(localPrefix: string) {
  return `${CLASS_PREFIX}-${localPrefix}`;
}

/**
 * 创建class，将前缀和label连接在一起
 * @param prefix
 * @returns
 */
export function createClass(localPrefix: string) {
  // 前缀 = 全局前缀 + 本地组件前缀
  const PREFIX = `${CLASS_PREFIX}-${localPrefix}`;
  const SPACE = " ";

  return function (label?: string) {
    if (!label) return PREFIX;
    return `${SPACE}${PREFIX}-${label}`;
  };
}
