// ====================== MAP =========================
var map = L.map("map").setView([51.505, -0.09], 13)

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "",
}).addTo(map)

let selectedPolygon

function changeLayersData(id) {
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
    let api = `http://api.agromonitoring.com/agro/1.0/image/search?start=1625512634&end=1668712634&polyid=6367f7e15c2911000750eee0&appid=7db9c06d307607716194a3b47844e5c3`
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
            console.log(ddd)
            $(".display-date").removeClass("d-none")
            $(".spinner-border").addClass("d-none")
            $(".layers-section").removeClass("d-none")
            $(".display-date p").text(returnDate())
            const requiredFields = [
              "max",
              "mean",
              "median",
              "min",
              "std",
              "deviation",
              "num",
            ]
            $(".layers-section").html("")
            for (let i in ddd) {
              if (requiredFields.includes(i)) {
                let a = returnLayer(i, ddd[i])
                $(".layers-section").append(a)
              }
            }
          })
          .fail(function () {
            console.log("failed due to: " + link + 2)
          })
      })
      .fail(function (e) {
        $(".layers-section").addClass("d-none")
        $(".spinner-border").addClass("d-none")
        $(".error-poly").removeClass("d-none")
        console.log(e)
      })
  })
}

function changeChart(id) {
  console.log(id)
}
function showOnMap(elem) {
  console.log(returnDate())
  let id = elem.id
  selectedPolygon = id // make it selected
  console.log(polyIds.indexOf(id))
  changeLayersData(id)
  changeChart(id)
  // remove selected poly class
  for (let i = 0; i < polyIds.length; i++) {
    $(`#${polyIds[i]}`).removeClass("selected-poly")
  }
  $(`#${id}`).addClass("selected-poly")
  const api = `http://api.agromonitoring.com/agro/1.0/polygons/${id}?appid=${apiKey}`
  $.get(api, function (data) {}).done(function (d) {
    map.polygon && map.polygon.remove()
    console.log(map.polygon)

    let coordinates = d.geo_json.geometry.coordinates[0]
    let polygon = L.polygon(data[polyIds.indexOf(id)], {
      color: "#000000",
      opacity: 0.6,
      fillColor: "#3319b3",
      fillOpacity: 1,
    }).addTo(map)
    // zoom the map to the polygon
    map.fitBounds(polygon.getBounds())
  })
}

// ===================== CONSTANTS =========================

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
    const api = `http://api.agromonitoring.com/agro/1.0/polygons/${polyIds[i]}?appid=${apiKey}`
    $.get(api, function (data) {}).done(function (d) {
      let coordinates = d.geo_json.geometry.coordinates[0]
      let p = returnPoly(d.name, d.area, polyIds[i])
      $(".polys-section").append(p)
    })
  }
})

// charts system

anychart.onDocumentReady(function () {
  // add data
  var data = [
    ["2003", 0.431, -0.008, 0.195],
    ["2004", 0.464, -0.014, 0.218],
    ["2005", 0.223, -0.01, 0.418],
  ]

  // create a data set
  var dataSet = anychart.data.set(data)

  // map the data for all series
  var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 })
  var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 })
  var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 })

  // create a line chart
  var chart = anychart.line()

  // create the series and name them
  var firstSeries = chart.line(firstSeriesData)
  firstSeries.name("Max")
  var secondSeries = chart.line(secondSeriesData)
  secondSeries.name("Min")
  var thirdSeries = chart.line(thirdSeriesData)
  thirdSeries.name("Mean")

  // add a legend
  chart.legend().enabled(true)

  // add a title
  chart.title("NDVI")

  // specify where to display the chart
  chart.container("container")
  chart.tooltip().positionMode("point")
  chart.tooltip().position("right").anchor("left-center").offsetX(5).offsetY(5)
  // draw the resulting chart
  chart.draw()
})
