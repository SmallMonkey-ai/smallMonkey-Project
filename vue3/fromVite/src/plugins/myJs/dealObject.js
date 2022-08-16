
class dealObject {
    constructor() {
    }
    // 判断只是对象（不是数组）
    judgeObject(object) {
        return (object instanceof Object)
    }

    // 判断当前对象是否为空
    judgeObjectIsEmpty(object) {
        return Object.keys(object).length === 0
    }

    // 遍历对象查看是否包括某key项值
    ergodicObjectIsInclude(object, key) {
        for (let keys in object) {
            if (keys == key) {
                return true
            }
        }
    }

    // 对象合并 将需要合并的对象以数组传入 [obj1,obj2,obj3]
    // 当只传一个对象是 相当于对象的浅拷贝
    mergeObject(object) {
        return Object.assign(...object)
    }

    // 去除对象里面的空值
    removeObjectEmpty(object) {
        return Object.values(object).filter(key => key)
    }

    // 更改对象里的key值
    // newKeyS {oldKey1:'newKey1',oldKey2:'newKey2'}
    changeObjectKey(object, newkeyS) {
        return Object.keys(object).reduce((result, key) => {
        // * 取出待处理的原对象的key值 newkeyS[Object.keys(newkeyS).filter(item1 => key == item1)[0]]
            // Object.keys(newkeyS).filter(item1 => key == item1)[0] 过滤当前key等于待改变的key
            // 上述为真时 使用新的key  反之 使用原key
            let newKey = newkeyS[Object.keys(newkeyS).filter(item1 => key == item1)[0]] || key
            result[newKey] = object[key]
            return result
        }, {})
        // 上面空对象是给reduce 赋默认值
    }
}

export default dealObject