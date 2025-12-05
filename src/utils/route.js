import path from 'path-browserify'

// 获取所有子路有的数字
const getChildrenRoutes = (routes) => routes.flatMap((route) => route.children || [])

// 判断数据是否为空
function isNull(data) {
  return !data || (typeof data === 'object' && Object.keys(data).length === 0)
}

//过滤掉子路有存在的顶层路由
export const filterRouters = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter((route) => !childrenRoutes.some((child) => child.path === route.path))
}

// 最终生成的菜单数据
export function getMenus(routes, basePath = '') {
  const result = []
  routes.forEach((item) => {
    const { meta, children } = item
    if (isNull(meta) && isNull(children)) {
      return
    }
    if (isNull(meta) && !isNull(children)) {
      result.push(getMenus(children, basePath))
      return
    }
    const routePath = path.resolve(basePath, item.path)
    let existingRoute = result.find((r) => r.path === routePath)
    if (!existingRoute) {
      existingRoute = {
        ...item,
        path: routePath,
        children: []
      }
      if (meta.title && meta.icon) {
        result.push(existingRoute)
      }
    }
    if (children) {
      existingRoute.children.push(...getMenus(children, routePath))
    }
  })
  return result
}
