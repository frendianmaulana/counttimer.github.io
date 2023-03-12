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
            // countdown.innerHTML = `<b class="fw-bolder fs-5 font-special">${d} Hari, ${h} Jam, ${m} Menit, ${s} Detik</b>`
            countdown.innerHTML = `<div class="alert alert-success d-flex align-items-center text-center container fw-bolder" role="alert"><i class="bi bi-stopwatch fs-3"></i>&nbsp;${d} Hari, ${h} Jam, ${m} Menit, ${s} Detik</div>`
            // countdown.innerHTML = '${d} days, ${h} hours, ${m} month, ${s} seconds'
        } else {
            // countdown.innerHTML = '<b class="fw-bolder fs-5 font-special">Waktu Telah Habis</b>'
            countdown.innerHTML = '<div class="alert alert-info d-flex align-items-center text-center" role="alert"><i class="bi bi-info-circle-fill"></i>&nbsp;<div class="fw-bolder">Waktu Telah Habis</div><div class="d-flex flex-row-reverse"<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div></div>'
        }
    }, 1000)
})