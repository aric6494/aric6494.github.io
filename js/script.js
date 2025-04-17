// 网站添加运行时间
setInterval(() => {
    // 起始建站时间
    const start = new Date('2025/01/28 00:00:00');
    const now = new Date();

    // 先计算两个日期的各个字段差值
    let years    = now.getFullYear()  - start.getFullYear();
    let months   = now.getMonth()     - start.getMonth();
    let days     = now.getDate()      - start.getDate();
    let hours    = now.getHours()     - start.getHours();
    let minutes  = now.getMinutes()   - start.getMinutes();
    let seconds  = now.getSeconds()   - start.getSeconds();

    // 如果秒为负，则借一分钟
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    // 如果分为负，则借一小时
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    // 如果时为负，则借一天
    if (hours < 0) {
        hours += 24;
        days--;
    }
    // 如果天为负，则借上个月份的天数
    if (days < 0) {
        // 取得当前月的前一个月的天数
        const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonthLastDay;
        months--;
    }
    // 如果月为负，则借一年
    if (months < 0) {
        months += 12;
        years--;
    }

    // 补零函数
    const pad = (n) => n < 10 ? '0' + n : n;

    // 拼接要显示的字符串
    const html = '网站已存在：' + 
                 `${years} 年 ${pad(months)} 月 ${pad(days)} 天 ` +
                 `${pad(hours)} 时 ${pad(minutes)} 分 ${pad(seconds)} 秒`;

    // 更新页面
    document.getElementById("runtime").innerHTML = html;
}, 1000);
