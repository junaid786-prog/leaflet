const Polys = ["Poly 1", "Poly 2", "Poly 3", "Poly 4"]
const polyIds = [
  "6373b5ab176fe6bcde43fd0d",
  "63731fdb6409554ffd6856fd",
  "6367f7e15c2911000750eee0",
]
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function returnDate(t) {
  let d
  if (!t) d = new Date()
  else d = new Date(t * 1000)
  return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`
}
function returnPic(date, place) {
  const pic = `<div class="layer w-75 p-1 ps-2 pe-2 d-flex justify-content-between align-items-center h-auto mt-2">
    <p>${option}</p>
    <p>${value.toFixed(2)}</p>
  </div>`
  return pic
}
function returnLayer(option, value) {
  const layer = `<div class="layer w-75 p-1 ps-2 pe-2 d-flex justify-content-between align-items-center h-auto mt-2">
    <p>${option}</p>
    <p>${value.toFixed(2)}</p>
  </div>`
  return layer
}

function startTime(t) {
  let d
  if (!t) d = new Date()
  else d = new Date(t * 1000)

  return d.getTime() / 1000
}

var SECONDS_IN_MONTH = 2628288
