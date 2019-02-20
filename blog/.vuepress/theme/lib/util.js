/**
 * 判断是否是完整 url
 */
export const checkUrl = url => {
  return /^((ht|f)tps?):\/\/?/.test(url);
}

/**
 * 分割地址
 */
export const splitUrl = url => url.split('/').filter(item => item);

/**
 * 根据路由分割页面 
 */
export const splitPages = allPages => {
  let pages = {};
  allPages.forEach(item => {
    const path = item.path;
    const arrPath = splitUrl(path);
    if (arrPath.length > 1 && !arrPath[0].includes('.html')) {
      const key = arrPath[0];
      if (pages[key]) {
        const element = pages[key];
        element.push(item);
      } else {
        pages[key] = [item]
      }
    }
  });
  return pages
}
