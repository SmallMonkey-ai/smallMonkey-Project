# JS
封装的Js成方法(来自第三方或原生)
### day.js 使用

####引入day.js
在vue中 直接 import TimeFormatter from ./time.js
let timeFormatter = new TimeFormatter() 即可使用

####包含方法（以下方法可通过实例直接调用）
处理时间（处理时间 默认返回当前时间精确到秒  参数{ format：需要处理的格式(默认 'YYYY-MM-DD HH:mm:ss') time:需要处理的时间（默认当前时间）}）
dealCurrentTime（format,time）

输出当前日期为周几 参数{time:默认当前日期}
getDayOfWeek(time)

 判断是否是闰年 参数{year:处理的年份}
 getCurrentIsLeapYear(year)
 
 时间转时间戳
 getTimeToKey(time)
 
 时间戳转时间
 getKeyToTime(key)
 
 加上或减去指定时间 
 参数{ time: 基准时间 ；addOrSubtract: 'add':加 ,'subtract': 减length：Number 需要加多久;
 unit：跨越单位 'week'：周  'day'：日 'month': 月（0 - 11） 'year'：年 'hour'：时 'minute':分 'second':秒 'millisecond'：毫秒 (不区分大小写 )
 }
 getNewDateFromNow(time, addOrSubtract, length, unit)
 
 计算两个时间的间距
 arr 是需要计算的两个时间 数组传递
 unit：跨越单位 'week'：周  'day'：日 'month': 月（0 - 11） 'year'：年 'hour'：时 'minute':分 'second':秒 'millisecond'：毫秒 (不区分大小写 )结果保留两位
 getTwoDateSpacing(arr, unit)
 
 计算当前月份的天数
 getCurrentMonthDays(time) 
 
 
 ###数组处理
在vue中 直接 import DealCurrentArray from './dealArray.js'
let dealCurrentArray = new DealCurrentArray() 即可使用除（扁平化转tree tree转扁平化）

 #### 扁平化转tree tree转扁平化
 import {treeToFlat,flatToTree} from './dealArray.js'
 数组扁平化数据转成tree形数据 Json格式是通过 id 以及 parent_id进行关联的
 参数一 扁平化数据
 flatToTree(array)

 数组tree形数据转成扁平化数据 子代放于children中
 treeToFlat(array)
 
 ####处理方法（以下方法可通过实例直接调用）
 判断是否为数组对象 参数一 判定对象
 judgeArray(array)
  
 非对象数组去重
 removeSameArray(array)
 
 对象数组去重
 removeSameObjectArray(array)
 
 选择数组的前几项
 参数一：需要处理的数组 参数二：需要选择多少项
 spliceArrayPreItems(array, num)
 
 数组合并
 mergeArray(array1, array2)
 
 输出两个数组公共部分（交集） 
 arrayIntersection(array1, array2)
 
 删除数组中所有对象包含的一项
 参数一 原数组 参数2 删除中包含的项的key 
 deleteArrayObjectElement(array, elementKey)
 
 删除数组中的一项
 参数一 原数组 参数二 删除该项中的key 参数三 删除该项中key对应的value
 deleteArrayElement(array, elementKey, elementValue)
 
 更改数组的key值 
 参数一 原数组 参数二 原本的key值 参数三 新的key 值
 changeArrayKey(array, oldKey, newKey)
 
 数组中根据某一项数据进行排序
 参数一 原数组 参数二 排序规则 (up 升序 down 降序)  参数三  依据哪项数据(如纯数据数组 此参数可以不传)
 sortArray(array, rule, key)
 
 输出数组中的极值
 参数一 原数组 参数二 极值规则 参数三  依据哪项数据(如纯数据数组 此参数可以不传)
 * 由于Math.max 是一组数据 而不是数组形式返回 而方法的apply相当于调用函数(指定数组替换函数的参数) 恰好apply传数组 满足下面情况
 arrayPeak(array,rule,key) 
 
 过滤数组中的虚值 空值
 参数一 原数组 参数二 过滤的虚值key（如不为对象数组 此参数可以不传）
 * 可过滤 false null undefined ''  NaN 不含此项值
 arrayFilterInvented(array, key)
 
 数组的拷贝
 参数一 原数组 参数二 拷贝规则（deep 深拷贝 shadow 浅拷贝）
 arrayClone(array, rule)
 
 
 
