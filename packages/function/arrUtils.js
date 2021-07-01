/**
 * 数组分组
 *
 * @param arr Array 进行便利的数组
 * @param key string
 * @return {*}
 * @constructor
 */
const group = (arr = [], key) => {
    return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
}

/**
 * 多维数组转为一维数组
 * @param arr
 * @return {*}
 */
const flatMap = (arr) => {
    return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?flatMap(cur):cur),[])
}

/**
 * 数组去重
 *
 * @param arr
 * @return {*}
 * @constructor
 */
const uniq = (arr = []) => {
    return arr.reduce((t, v) => t.includes(v) ? t : [...t, v], []);
}

/**
 * 对象里的属性求和
 * @param arr
 * @param key
 */
const objSum = (arr, key) => arr.reduce((prev, cur) => cur[key] + prev, 0)

module.exports = {
    /**
     * 根据键名过滤数组
     *
     * @param arr Array 要进行便利的数组
     * @param key String 键名
     * @return {*} Array
     */
    keysDiff: function (arr = [], key) {
        let hash = {}
        return arr.reduce((ss, item) => {
            hash[item[key]] ? '' : (hash[item[key]] = true && ss.push(item));
            return ss;
        }, []);
    },
    /**
     * 数组过滤
     *
     * @param arr Array 要进行便利的数组
     * @param oarr Array 便利的规则1
     * @return {*} Array
     * @constructor
     */
    difference: function (arr = [], oarr = []) {
        return arr.reduce((t, v) => (!oarr.includes(v) && t.push(v), t), []);
    },
    uniq,
    group,
    flatMap,
    objSum,
}

