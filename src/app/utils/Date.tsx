export const getDateList = (selectYear?:string, selectMonth?:string) => {

    const now = new Date();

    let years = [];
    for (let y = now.getFullYear(); y >= 1930; y -= 1) {
        years.push(y);
    }

    let month = [];
    for (let m = 1; m <= 12; m += 1) {
        if (m < 10) {
            // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
            month.push('0' + m.toString());
        } else {
            month.push(m.toString());
        }
    }

    let days = [];
    if (selectYear && selectMonth) {
        let date = new Date(Number(selectYear), Number(selectMonth), 0).getDate();
        for (let d = 1; d <= date; d += 1) {
            if (d < 10) {
                // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
                days.push('0' + d.toString());
            } else {
                days.push(d.toString());
            }
        }
    }

    let dateObj = {
        years: years,
        month: month,
        days: days,
    };

    return dateObj;
};
