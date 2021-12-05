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

/**
 * 防抖函数
 * @param fn
 * @param timeout
 * @returns
 */
export function debounce(fn: () => void, timeout: number) {
  let timer: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.call(null, ...args);
    }, timeout);
  };
}

/**
 * 节流函数
 * @param fn
 * @param timeout
 * @returns
 */
export function throttle(fn: () => void, timeout: number) {
  let flag = true;

  return function (...args: readonly any[]): void {
    if (flag) {
      fn.call(null, ...args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, timeout);
    }
  };
}
