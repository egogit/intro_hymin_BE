const formatDate = (d) => {
    const date = new Date(d);
    let year = date.getFullYear();
    let month= date.getMonth() + 1;
    let day = date.getDay();

    return `${year}-${month}-${day}`;
}

const formatTerm = (startDate, endDate) => {
    let sDate = formatDate(startDate);
    let eDate = endDate || 'Current';
    if (eDate !== 'Current'){
        eDate = formatDate(eDate)
    }
    return [sDate, eDate].join(' ~ ');
}

module.exports = {
    formatTerm,
    formatDate
};