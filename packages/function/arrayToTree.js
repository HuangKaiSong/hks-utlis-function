
/**
 * 数组转树🌲结构
 * @param arr
 * @param parentId 顶级id 默认0
 * @param key String id
 * @param pkey String pid
 * @return {*[]}
 */
export function arrayToTree(arr, key = 'id', pkey = 'pid', parentId = 0) {
    const parentMap = {}
    const itemMap = {}
    const result = []
    for (const item of arr) {
        const { [key]: id, [pkey]: pid } = item
        if (parentMap[id]) {
            item.children = parentMap[id]
        }

        const copyitem = { ...item }
        if (!itemMap[pid]) {
            (parentMap[pid] || (parentMap[pid] = [])).push(copyitem)
        } else {
            (itemMap[pid].children || (itemMap[pid].children = [])).push(copyitem)
        }
        itemMap[id] = copyitem

        if (item[pkey] === parentId) {
            result.push(copyitem)
        }
    }
    return result
}
