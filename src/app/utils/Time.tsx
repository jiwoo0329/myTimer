export const getTimeList = () => {
    let hour = [];
    for (let y = 0; y <= 23; y += 1) {
        if (y < 10) {
            // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
            hour.push('0' + y.toString());
        } else {
            hour.push(y.toString());
        }
    }

    let minute = [];
    for (let m = 0; m <= 59; m += 1) {
        if (m < 10) {
            // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
            minute.push('0' + m.toString());
        } else {
            minute.push(m.toString());
        }
    }

    let timeObj = {
        hour: hour,
        minute: minute,
    };

    return timeObj;
};

/**
 * 시, 분, 초 숫자가 9보다 작을 떄 앞에 '0' 삽입 함수
 */
export const changeTimerForm = (
    hours: string | number,
    minutes: string | number,
    seconds: string | number
) => {

    let _hours = String(hours).padStart(2, '0');
    let _minutes = String(minutes).padStart(2, '0');
    let _seconds = String(seconds).padStart(2, '0');

    let newTimerObj = {
        hours: _hours,
        minutes: _minutes,
        seconds: _seconds,
    };

    return newTimerObj;
};
