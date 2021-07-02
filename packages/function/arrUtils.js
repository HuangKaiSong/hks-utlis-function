/**
 * 数组分组
 *
 * @param arr Array 进行便利的数组
 * @param key string
 * @return {*}
 * @constructor
 */
export const group = (arr = [], key) => {
    return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
}

/**
 * 多维数组转为一维数组
 * @param arr
 * @return {*}
 */
export const flatMap = (arr) => {
    return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?flatMap(cur):cur),[])
}

/**
 * 数组去重
 *
 * @param arr
 * @return {*}
 * @constructor
 */
export const uniq = (arr = []) => arr.reduce((t, v) => t.includes(v) ? t : [...t, v], [])

/**
 * 对象里的属性求和
 * @param arr
 * @param key
 */
export const objSum = (arr, key) => arr.reduce((prev, cur) => cur[key] + prev, 0)

/**
 * 根据键名过滤数组
 *
 * @param arr Array 要进行便利的数组
 * @param key String 键名
 * @return {*} Array
 */
export const keysDiff = (arr = [], key) => {
    let hash = {}
    return arr.reduce((ss, item) => {
        hash[item[key]] ? '' : (hash[item[key]] = true && ss.push(item));
        return ss;
    }, []);
}

/**
 * 数组过滤
 *
 * @param arr Array 要进行便利的数组
 * @param oarr Array 便利的规则1
 * @return {*} Array
 * @constructor
 */
export const difference = (arr = [], oarr = []) => {
    return arr.reduce((t, v) => (!oarr.includes(v) && t.push(v), t), []);
}
