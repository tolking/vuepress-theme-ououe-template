/**
 * 判断是否是完整 url
 */
export const checkUrl = url => {
  return /^((ht|f)tps?):\/\/?/.test(url)
}
