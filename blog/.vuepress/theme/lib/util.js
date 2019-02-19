/**
 * 判断是否是完整 url
 */
export const checkUrl = url => {
  return /^((ht|f)tps?):\/\/?/.test(url);
}

/**
 * 根据路由分割页面 
 */
export const splitPages = allPages => {
  console.log(allPages);
  let pages = {};
  allPages.reverse().forEach(item => {
    const { title, path } = item;
    const arrPath = path.split('/').filter(item => item);
    if (arrPath.length > 1 && !arrPath[0].includes('.html')) {
      console.log(arrPath);
      item.frontmatter.layout = 'page';
      
      const key = arrPath[0];
      if (pages[key]) {
        const element = pages[key];
        element.push(item);
      } else {
        pages[key] = [item]
      }
    } else {
      item.frontmatter.layout = 'Layout';
    }
  });
  return pages
}
