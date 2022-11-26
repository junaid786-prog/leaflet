// ====================== MAP =========================
var map = L.map("map").setView([51.505, -0.09], 13)
L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map)
// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution: "",
// }).addTo(map)

let selectedPolygon
// removeclasses
// appendlayers
// changelayer
// display data
// chart

function changeLayersData(index) {
  $(".form-select").removeClass("d-none")
  // $(".spinner-border").removeClass("d-none")
  $(".not-selected").addClass("d-none")
  $(".error-poly").addClass("d-none")
  // =================== LAYERS =============================

  const layers = ["Select", "NDVI", "EVI", "EVI2", "NRI", "True Color"]
  $(".form-select").html("")
  for (let i = 0; i < layers.length; i++) {
    let layerOption = `<option value=${layers[i]}>${layers[i]}</option>`
    $(".form-select").append(layerOption)
  }

  $(".form-select").change(function () {
    $(".spinner-border").removeClass("d-none")
    $(".layers-section").addClass("d-none")
    $(".display-date").addClass("d-none")
    let a = $(this).children("option:selected").val()
    let api = `http://api.agromonitoring.com/agro/1.0/image/search?start=162551143&end=1668712634&polyid=${polyIds[index]}&appid=7db9c06d307607716194a3b47844e5c3`
    $.get(api, function (data) {})
      .done(function (d) {
        let link
        switch (a) {
          case "NDVI":
            link = d[0].stats.ndvi
            break
          case "EVI":
            link = d[0].stats.evi
            break
          case "EVI2":
            link = d[0].stats.evi2
            break
          case "NRI":
            link = d[0].stats.nri
            break
          default:
            link = d[0].stats.dswi
            break
        }
        $.get(link, function (dd) {})
          .done(function (ddd) {
            $(".display-date").removeClass("d-none")
            $(".spinner-border").addClass("d-none")
            $(".layers-section").removeClass("d-none")
            $(".display-date p").text(returnDate(d[0].dt))
            const requiredFields = [
              "max",
              "mean",
              "median",
              "min",
              "std",
              "deviation",
              "num",
            ]
            drawOnChart()
            displayList(d)
            $(".layers-section").html("")
            for (let i in ddd) {
              if (requiredFields.includes(i)) {
                let a = returnLayer(i, ddd[i])
                $(".layers-section").append(a)
              }
            }
          })
          .fail(function () {
            console.log("failed due to: ")
          })
      })
      .fail(function (e) {
        $(".layers-section").addClass("d-none")
        $(".spinner-border").addClass("d-none")
        $(".error-poly").removeClass("d-none")
      })
  })
}

function showOnMap(elem) {
  let id = elem.id
  selectedPolygon = id // make it selected
  let pos = polyIds.indexOf(id)
  changeLayersData(pos)
  // remove selected poly class
  for (let i = 0; i < polyIds.length; i++) {
    $(`#${polyIds[i]}`).removeClass("selected-poly")
  }
  $(`#${id}`).addClass("selected-poly")
  const api = `http://api.agromonitoring.com/agro/1.0/polygons/${id}?appid=${apiKey}`
  $.get(api, function (data) {}).done(function (d) {
    map.polygon && map.polygon.remove()
    let coordinates = d.geo_json
    let p = L.geoJSON(coordinates).addTo(map)
    map.fitBounds(p.getBounds())
  })
}
// ===================== CONSTANTS =========================

const key = `7db9c06d307607716194a3b47844e5c3`
const apiKey = `7db9c06d307607716194a3b47844e5c3`

// ===================== POLYGONS ===========================

function returnPoly(name, area, id) {
  const poly = `<div class="poly w-75 p-1 ps-2 pe-2 d-flex justify-content-between align-items-center h-auto rounded-3 mt-2 c-pointer" onclick = showOnMap(this) id = ${id}>
          <p>${name}</p>
          <p>${area.toFixed(1)} ha</p>
        </div>`
  return poly
}

$(document).ready(function () {
  // display list of polygons
  for (let i = 0; i < polyIds.length; i++) {
    const api = `http://api.agromonitoring.com/agro/1.0/polygons/${polyIds[i]}?appid=${key}`
    $.get(api, function (data) {}).done(function (d) {
      let p = returnPoly(d.name, d.area, polyIds[i])
      $(".polys-section").append(p)
    })
  }
  // date filteration
  var fromDate = document.querySelector("#from_date")
  var toDate = document.querySelector("#to_date")

  var to = new Date()
  var from = new Date(Date.now() - 2.628e9)

  fromDate.value = from.toISOString().substring(0, 10)
  toDate.value = to.toISOString().substring(0, 10)
})

// charts system
function drawOnChart() {
  let minData = []
  let maxData = []
  let meanData = []
  let i = `http://api.agromonitoring.com/agro/1.0/ndvi/history?start=1633201200&end=1669369394&polyid=${selectedPolygon}&appid=${key}`
  $.get(i, function (data) {}).done(function (d) {
    for (let j = 0; j < 10; j++) {
      let dd = d[j].data
      minData.push(dd.min)
      maxData.push(dd.max)
      meanData.push(dd.mean)
    }
    draw(minData, maxData, meanData)
  })
  $(".no_data p").css("display", "none")
  $("#myChart").removeClass("d_none")
}

function draw(minData, maxData, meanData) {
  const ctx = document.getElementById("myChart")
  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "12-Nov-2022",
        "14-Nov-2022",
        "16-Nov-2022",
        "18-Nov-2022",
        "20-Nov-2022",
        "28-Nov-2022",
      ],
      datasets: [
        {
          label: "Max",
          data: maxData,
          borderWidth: 1,
        },
        {
          label: "Min",
          data: minData,
          borderWidth: 1,
        },
        {
          label: "Mean",
          data: meanData,
          borderWidth: 1,
        },
      ],
    },
  })
}

function returnBox(id, detail) {
  const d = returnDate(id)
  const poly = `<div class="map_box" onclick = layerC(this) id = ${id}>
          <p>${d}</p>
          <p>${detail.type}</p>
        </div>`
  return poly
}
function displayList(data) {
  for (let i = 0; i < data.length; i++) {
    let box = returnBox(data[i].dt, data[i])
    $(`.map_bottom`).append(box)
  }
}
