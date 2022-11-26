const dateform = document.getElementById("date-form")
const countdown = document.getElementById("countdown-box")

dateform.addEventListener("submit", e => {
    e.preventDefault()
    const dateinput = document.getElementById("date-input")
    const timeinput = document.getElementById("time-input")
    const eventdate = Date.parse(dateinput.value + " " + timeinput.value)
    console.log(eventdate)

    window.eventCountdown && clearInterval(window.eventCountdown)

    const eventCountdown = setInterval(() => {
        window.eventCountdown = eventCountdown
        const now = new Date().getTime()
        const days = 1000 * 60 * 60 * 24
        const hours = 1000 * 60 * 60
        const minutes = 1000 * 60
        const seconds = 1000

        const d = Math.floor(eventdate / days - now / days)
        const h = Math.floor((eventdate / hours - now / hours) % 24)
        const m = Math.floor((eventdate / minutes - now / minutes) % 60)
        const s = Math.floor((eventdate / seconds - now / seconds) % 60)

        const diff = eventdate - now
        if (diff > 0) {
            countdown.innerHTML = `<b class="fw-bolder fs-5 font-special">${d} Hari, ${h} Jam, ${m} Menit, ${s} Detik</b>`
            // countdown.innerHTML = '${d} days, ${h} hours, ${m} month, ${s} seconds'
        } else {
            countdown.innerHTML = '<b class="fw-bolder fs-5 font-special">Waktu Telah Habis</b>'
        }
    }, 1000)
})