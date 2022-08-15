
// npm install dayjs --save
import dayJs from 'dayjs'
let arrUnit = [
    { type: 'year', value: '年' },
    { type: 'month', value: '月' },
    { type: 'day', value: '天' },
    { type: 'week', value: '周' },
    { type: 'hour', value: '时' },
    { type: 'minute', value: '分' },
    { type: 'second', value: '秒' },
    { type: 'millisecond', value: '：毫秒' }
]
class timeFormatter {
    constructor() {
    }
    // 处理时间 默认返回当前时间精确到秒  参数{ format：需要处理的格式(默认 'YYYY-MM-DD HH:mm:ss') time:需要处理的时间（默认当前时间）}
    dealCurrentTime(format,time) {
        // 默认精确到秒 默认当前时间
        if (format) {
            return dayJs(time).format(format)
        } else{
            return dayJs(time).format('YYYY-MM-DD HH:mm:ss')
        }
    }
    // 输出当前日期为周几 参数{time:默认当前日期}
    getDayOfWeek(time) {
        let DayOfWeek = dayJs(time).day()
        console.log(DayOfWeek)
        if (DayOfWeek == 1) {
            return '星期一'
        } else if (DayOfWeek == 2) {
            return '星期二'
        } else if (DayOfWeek == 3) {
            return '星期三'
        } else if (DayOfWeek == 4) {
            return '星期四'
        } else if (DayOfWeek == 5) {
            return '星期五'
        } else if (DayOfWeek == 6) {
            return '星期六'
        } else {
            return '星期日'
        }
        
    }
    // 判断是否是闰年 参数{year:处理的年份}
    getCurrentIsLeapYear(time) {
        // return dayJs(year).isLeapYear()
        return time % 4 == 0 && time % 100 != 0 || time % 400 == 0 ? '平年' : '闰年'
    }

    // 时间转时间戳
    getTimeToKey(time) {
        return dayJs(time).valueOf()
    }

    // 时间戳转时间
    getKeyToTime(key) {
        return dayJs(key).format('YYYY-MM-DD HH:mm:ss')
    }

//     加上或减去指定时间 
//     参数{ 
//     time: 基准时间 ；
//     addOrSubtract: 'add':加 ， 'subtract': 减
//     length：Number 需要加多久;
//     unit：跨越单位 'week'：周  'day'：日 'month': 月（0 - 11） 'year'：年 'hour'：时 'minute':分 'second':秒 'millisecond'：毫秒 (不区分大小写 )
//        }
    getNewDateFromNow(time, addOrSubtract, length, unit) {
        if (addOrSubtract == 'add') {
            return dayJs(time).add(length, unit).format('YYYY-MM-DD HH:mm:ss')
        } else if (addOrSubtract == 'subtract') {
            return dayJs(time).subtract(length, unit).format('YYYY-MM-DD HH:mm:ss')
        } else {
            return  '参数错误'
        }
    }

    // 计算两个时间的间距
    // arr 是需要计算的两个时间 数组传递
    // unit：跨越单位 'week'：周  'day'：日 'month': 月（0 - 11） 'year'：年 'hour'：时 'minute':分 'second':秒 'millisecond'：毫秒 (不区分大小写 )
    // 结果保留两位
    getTwoDateSpacing(arr, unit) {
        let newUnit = arrUnit.filter(item => item.type == unit)
        let newArr = arr.map(item => dayJs(item))
        return newArr[0].diff(newArr[1], unit).toFixed(2) > 0 ? '早' : '晚' +  Math.abs(newArr[0].diff(newArr[1], unit).toFixed(2))  +  newUnit[0].value 
    }

    // 计算当前月份的天数
    getCurrentMonthDays(time) {
        return dayJs(time).daysInMonth() 
    }
}
export default timeFormatter