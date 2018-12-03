function _get(obj, express) {
    let array = express.split('.') || []
    let result = null;
    if (!obj) {  //为null 或者 undefine 直接返回null
        return result
    }
    let preValue = obj
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (preValue.hasOwnProperty(array[index])) {
            preValue = preValue[array[index]]
            result = preValue
        } else {
            result = null
            break
        }
    }
    return result
}

module.exports = _get