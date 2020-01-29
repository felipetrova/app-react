const FormatCompleteDate = date => {
    let unformatDate = new Date(date),
        day = unformatDate.getDate() < 10 ? '0' + unformatDate.getDate() : unformatDate.getDate(),
        month = unformatDate.getMonth() + 1 < 10 ? '0' + (unformatDate.getMonth() + 1) : unformatDate.getMonth() + 1,
        year = unformatDate.getFullYear();

    return day + "/" + month + "/" + year
}

export { FormatCompleteDate }