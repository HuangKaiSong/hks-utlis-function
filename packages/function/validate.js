/**
 * 是否是邮箱
 * @param {string} str
 * @returns {Boolean}
 */
export function validEmail(str) {
    return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(str)
}
