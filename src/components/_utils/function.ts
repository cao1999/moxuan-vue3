/**
 * 判断某个值是不是某个类型
 * @param value
 * @param expectType
 */
export function isType(value: any, expectType: string): boolean {
  return getType(value) === expectType.toLocaleLowerCase();
}

/**
 * 获取value的类型
 * @param value
 */
export function getType(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase();
}
