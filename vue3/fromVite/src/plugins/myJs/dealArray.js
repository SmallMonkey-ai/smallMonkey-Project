class dealCurrentArray {
    constructor() { }

    //  判断是否为数组对象
    // 参数一 判定对象
    judgeArray(array) {
        return Array.isArray(array) ? '是' : '否'
    }

    // 非对象数组去重
    removeSameArray(array) {
        return [...new Set(array)]
    }

    // 对象数组去重
    removeSameObjectArray(array) {
        return [...new Set(array.map(i => JSON.stringify(i)))].map(j => JSON.parse(j))
    }

    // 选择数组的前几项
    // 参数一：需要处理的数组 参数二：需要选择多少项
    spliceArrayPreItems(array, num) {
        return array.splice(0, num)
    }

    // 删除数组的前几项
    // 参数一：需要处理的数组 参数二：需要删除多少项
    spliceArrayPreItems(array, num) {
        array.splice(0, num)
        return array
    }

    // 数组合并
    mergeArray(array1, array2) {
        return [...array1, ...array2]
    }

    // 输出两个数组公共部分（交集） 
    arrayIntersection(array1, array2) {
        return [...new Set(array1)].filter((item) => array2.includes(item));
    }

    // 删除数组中所有对象包含的一项
    // 参数一 原数组 参数2 删除中包含的项的key 
    deleteArrayObjectElement(array, elementKey) {
        let newObj = {}
        let newArr = []
        array.forEach(function (item) {
            for (var key in item) {
                if (key != elementKey) {
                    newObj[key] = item[key];
                }
            }
            newArr.push(newObj);
            newObj = {};//这步至关重要，每循环一次，都要清空一次，否则拿到的数据总是最后一条
        });
        return newArr
    }

    // 删除数组中的一项
    // 参数一 原数组 参数二 删除该项中的key 参数三 删除该项中key对应的value
    deleteArrayElement(array, elementKey, elementValue) {
        // array.map((item, index) => {
        //     for (const key in item) {
        //         if (key == elementKey && item[key] == elementValue) {
        //             delete array[index]
        //         }
        //     }
        // })
        // let copy = array.filter(function (s) {
        //     return s;
        // });
        // return copy
        let newArray = new Set(array)
        array.map(item => {
            for (let key in item) {
                key == elementKey && item[key] == elementValue ? newArray.delete(item) : ''
            }
        })
        // return [...new Set(Array.from(newArray).map(i=>JSON.stringify(i)))].map(j=>JSON.parse(j)) //去重对象数组
        return [...newArray]

    }

    // 更改数组的key值 
    // 参数一 原数组 参数二 原本的key值 参数三 新的key 值
    changeArrayKey(array, oldKey, newKey) {
        let newArray = []
        array.map(item => {
            let _item = JSON.parse(JSON.stringify(item).replace(oldKey, newKey))
            newArray.push(_item)
        })
        return newArray
    }

    // 数组中根据某一项数据进行排序
    // 参数一 原数组 参数二 排序规则 (up 升序 down 降序)  参数三  依据哪项数据(如纯数据数组 此参数可以不传)
    sortArray(array, rule, key) {
        if (key) {
            return array.sort((a, b) => {
                return rule == 'up' ? a[key] - b[key] : b[key] - a[key]
            })
        } else {
            return array.sort((a, b) => {
                return rule == 'up' ? a - b : b - a
            })
        }
    }

    // 输出数组中的极值
    // 参数一 原数组 参数二 极值规则 参数三  依据哪项数据(如纯数据数组 此参数可以不传)
    // * 由于Math.max 是一组数据 而不是数组形式返回 而方法的apply相当于调用函数(指定数组替换函数的参数) 恰好apply传数组 满足下面情况
    arrayPeak(array, rule, key) {
        if (key) {
            let newArray = array.map(item => item[key])
            return rule == 'big' ? Math.max.apply(Math, newArray) : Math.min.apply(Math, newArray)
        } else {
            return rule == 'big' ? Math.max.apply(Math, array) : Math.min.apply(Math, array)
        }
    }

    // 过滤数组中的虚值 空值
    // 参数一 原数组 参数二 过滤的虚值key（如不为对象数组 此参数可以不传）
    //  * 可过滤 false null undefined ''  NaN 不含此项值
    arrayFilterInvented(array, key) {
        if (key) {
            return array.filter(item => item[key])
        } else {
            return array.filter(Boolean)
        }
    }

    // 数组的拷贝
    // 参数一 原数组 参数二 拷贝规则（deep 深拷贝 shadow 浅拷贝）
    arrayClone(array, rule) {
        if (rule == 'deep') {
            return JSON.parse(JSON.stringify(array))
        } else {
            return array.concat()
        }
    }
}

// 数组扁平化数据转成tree形数据 Json格式是通过 id 以及 parent_id进行关联的
// 参数一 扁平化数据
export function flatToTree(array) {
    let treeList = array.reduce((prev, cur) => {
        prev[cur['id']] = cur;
        return prev
    }, {})
    // console.log(treeList)

    //通过引用类型原理实现  
    let result = array.reduce((prev, cur) => {
        let pid = cur.parent_id;
        // pid为0的就找不到父对象，找到当前cur的父对象
        // 对象的浅拷贝，引用关系存在，在后面处理parent的时候也会导致cur的改变，达到递归的效果
        let parent = treeList[pid]
        // 如果父对象存在，就将cur压到父对象的children属性中
        if (parent) {
            // parent和cur存在引用关系
            parent.children ? parent.children.push(cur) : parent.children = [cur]
        } else if (pid === 0) {
            // 没有父对象，则此cur为树的根元素
            prev.push(cur)
        }
        return prev
    }, [])
    return result
}

// 数组tree形数据转成扁平化数据 子代放于children中
// 由于此方法涉及递归 故不适合封装于类中  
export function treeToFlat(array) {
    return array.reduce((res, item) => {
        const { children, ...i } = item
        return res.concat(i, children && children.length ? treeToFlat(children) : [])
    }, [])
}

export default dealCurrentArray 