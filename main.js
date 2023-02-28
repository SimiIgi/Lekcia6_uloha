

/* const parseDate = (datum) => {
    return {
        day: Number(datum.slice(0, 2)),
        month: Number(datum.slice(3, 5)),
        year: Number(datum.slice(6))
    }
}

parseDate("01.01.2023") */

const date = ({ day: 6, month: 4, year: 2021 })

const formatDate = (date) => {
    return {
        let day = date.day,
        month: date.padStart(3, 5),
        year: date.padStart(6)
    }
}

/* formatDate({ day: 6, month: 4, year: 2021 }) */


