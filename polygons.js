const Polys = ["Poly 1", "Poly 2", "Poly 3", "Poly 4"]
const data = [
  [
    [37, -109.05],
    [41, -109.03],
    [41, -102.05],
    [37, -102.04],
    [31, -100.04],
    [30, -101.04],
  ],
  [
    [20, -90.05],
    [17, -88.03],
    [10, -76.05],
    [26, -96.04],
  ],
  [
    [56, -95.05],
    [53, -85.03],
    [61, -120.05],
    [64, -116.04],
  ],
  [
    [37, -200.05],
    [44, -109.03],
    [41, -102.05],
    [37, -102.04],
    [31, -100.04],
    [30, -101.04],
  ],
  [
    [-93.195205, 42.058557],
    [-93.1924, 42.055172],
    [-93.189244, 42.058557],
    [-93.195205, 42.058557],
  ],
  [
    [-93.258176, 42.077633],
    [-93.258433, 42.077569],
    [-93.258669, 42.077617],
    [-93.258777, 42.077569],
    [-93.259656, 42.077569],
    [-93.259785, 42.077617],
    [-93.261266, 42.077521],
    [-93.261201, 42.07733],
    [-93.261201, 42.076534],
    [-93.261287, 42.076438],
    [-93.261523, 42.07655],
    [-93.262703, 42.076613],
    [-93.264055, 42.077234],
    [-93.26427, 42.077314],
    [-93.26442, 42.07725],
    [-93.264613, 42.077394],
    [-93.264613, 42.077521],
    [-93.265514, 42.077569],
    [-93.265665, 42.077457],
    [-93.265729, 42.076948],
    [-93.265665, 42.076725],
    [-93.265729, 42.076534],
    [-93.265665, 42.076438],
    [-93.265665, 42.073412],
    [-93.26575, 42.073189],
    [-93.266029, 42.072854],
    [-93.266909, 42.072456],
    [-93.268175, 42.07158],
    [-93.268733, 42.071389],
    [-93.269076, 42.071596],
    [-93.269076, 42.071803],
    [-93.268926, 42.071899],
    [-93.26839, 42.071899],
    [-93.268175, 42.071962],
    [-93.266695, 42.072934],
    [-93.266523, 42.073125],
    [-93.266609, 42.073316],
    [-93.26648, 42.073412],
    [-93.266072, 42.073412],
    [-93.266072, 42.077521],
    [-93.270321, 42.077569],
    [-93.270471, 42.077266],
    [-93.270364, 42.077075],
    [-93.270471, 42.076534],
    [-93.270364, 42.076438],
    [-93.27045, 42.076183],
    [-93.270364, 42.07596],
    [-93.270471, 42.075801],
    [-93.270471, 42.075514],
    [-93.270535, 42.075228],
    [-93.270535, 42.071755],
    [-93.270471, 42.071437],
    [-93.270535, 42.071309],
    [-93.270471, 42.070863],
    [-93.270535, 42.070768],
    [-93.270535, 42.068697],
    [-93.270471, 42.068442],
    [-93.270535, 42.068347],
    [-93.270535, 42.063791],
    [-93.270471, 42.063472],
    [-93.270257, 42.063297],
    [-93.269784, 42.063233],
    [-93.267961, 42.063297],
    [-93.26781, 42.063233],
    [-93.266566, 42.063233],
    [-93.266459, 42.063297],
    [-93.264742, 42.063297],
    [-93.264227, 42.063233],
    [-93.260901, 42.063233],
    [-93.260815, 42.063169],
    [-93.260772, 42.063185],
    [-93.260751, 42.064587],
    [-93.260686, 42.064715],
    [-93.260922, 42.06497],
    [-93.260858, 42.065352],
    [-93.260922, 42.065447],
    [-93.260922, 42.06618],
    [-93.26103, 42.066276],
    [-93.26103, 42.06669],
    [-93.26088, 42.066722],
    [-93.260708, 42.066547],
    [-93.259614, 42.066483],
    [-93.259077, 42.066276],
    [-93.259184, 42.066101],
    [-93.256674, 42.065065],
    [-93.255837, 42.064571],
    [-93.255558, 42.064508],
    [-93.255322, 42.064555],
    [-93.254657, 42.064508],
    [-93.254292, 42.064316],
    [-93.253841, 42.064253],
    [-93.253198, 42.064444],
    [-93.253047, 42.06481],
    [-93.253005, 42.065702],
    [-93.251953, 42.065718],
    [-93.251803, 42.065718],
    [-93.251803, 42.075658],
    [-93.251953, 42.075674],
    [-93.252618, 42.075721],
    [-93.252769, 42.075626],
    [-93.252704, 42.074559],
    [-93.25279, 42.074336],
    [-93.253112, 42.074224],
    [-93.253112, 42.073794],
    [-93.253412, 42.073428],
    [-93.253605, 42.073348],
    [-93.254099, 42.072982],
    [-93.254743, 42.072759],
    [-93.254764, 42.071469],
    [-93.254592, 42.070736],
    [-93.254507, 42.070577],
    [-93.254592, 42.070449],
    [-93.254828, 42.070577],
    [-93.254828, 42.070704],
    [-93.255107, 42.071246],
    [-93.255, 42.071405],
    [-93.255107, 42.0715],
    [-93.255107, 42.072775],
    [-93.255193, 42.073014],
    [-93.25603, 42.073762],
    [-93.256137, 42.073969],
    [-93.257318, 42.074845],
    [-93.257253, 42.074973],
    [-93.257253, 42.075116],
    [-93.257661, 42.075546],
    [-93.257854, 42.075897],
    [-93.258111, 42.076852],
    [-93.258111, 42.077457],
    [-93.258176, 42.077633],
  ],
  [
    [-93.195205, 42.058557],
    [-93.1924, 42.055172],
    [-93.189244, 42.058557],
    [-93.195205, 42.058557],
  ],
]

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
  else d = new Date(t)
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

let j = {
  id: "504cdc9cca21f011a872bf3ffa3e34f6",
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-93.195205, 42.058557],
        [-93.1924, 42.055172],
        [-93.189244, 42.058557],
        [-93.195205, 42.058557],
      ],
    ],
  },
}

let k = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-93.258176, 42.077633],
        [-93.258433, 42.077569],
        [-93.258669, 42.077617],
        [-93.258777, 42.077569],
        [-93.259656, 42.077569],
        [-93.259785, 42.077617],
        [-93.261266, 42.077521],
        [-93.261201, 42.07733],
        [-93.261201, 42.076534],
        [-93.261287, 42.076438],
        [-93.261523, 42.07655],
        [-93.262703, 42.076613],
        [-93.264055, 42.077234],
        [-93.26427, 42.077314],
        [-93.26442, 42.07725],
        [-93.264613, 42.077394],
        [-93.264613, 42.077521],
        [-93.265514, 42.077569],
        [-93.265665, 42.077457],
        [-93.265729, 42.076948],
        [-93.265665, 42.076725],
        [-93.265729, 42.076534],
        [-93.265665, 42.076438],
        [-93.265665, 42.073412],
        [-93.26575, 42.073189],
        [-93.266029, 42.072854],
        [-93.266909, 42.072456],
        [-93.268175, 42.07158],
        [-93.268733, 42.071389],
        [-93.269076, 42.071596],
        [-93.269076, 42.071803],
        [-93.268926, 42.071899],
        [-93.26839, 42.071899],
        [-93.268175, 42.071962],
        [-93.266695, 42.072934],
        [-93.266523, 42.073125],
        [-93.266609, 42.073316],
        [-93.26648, 42.073412],
        [-93.266072, 42.073412],
        [-93.266072, 42.077521],
        [-93.270321, 42.077569],
        [-93.270471, 42.077266],
        [-93.270364, 42.077075],
        [-93.270471, 42.076534],
        [-93.270364, 42.076438],
        [-93.27045, 42.076183],
        [-93.270364, 42.07596],
        [-93.270471, 42.075801],
        [-93.270471, 42.075514],
        [-93.270535, 42.075228],
        [-93.270535, 42.071755],
        [-93.270471, 42.071437],
        [-93.270535, 42.071309],
        [-93.270471, 42.070863],
        [-93.270535, 42.070768],
        [-93.270535, 42.068697],
        [-93.270471, 42.068442],
        [-93.270535, 42.068347],
        [-93.270535, 42.063791],
        [-93.270471, 42.063472],
        [-93.270257, 42.063297],
        [-93.269784, 42.063233],
        [-93.267961, 42.063297],
        [-93.26781, 42.063233],
        [-93.266566, 42.063233],
        [-93.266459, 42.063297],
        [-93.264742, 42.063297],
        [-93.264227, 42.063233],
        [-93.260901, 42.063233],
        [-93.260815, 42.063169],
        [-93.260772, 42.063185],
        [-93.260751, 42.064587],
        [-93.260686, 42.064715],
        [-93.260922, 42.06497],
        [-93.260858, 42.065352],
        [-93.260922, 42.065447],
        [-93.260922, 42.06618],
        [-93.26103, 42.066276],
        [-93.26103, 42.06669],
        [-93.26088, 42.066722],
        [-93.260708, 42.066547],
        [-93.259614, 42.066483],
        [-93.259077, 42.066276],
        [-93.259184, 42.066101],
        [-93.256674, 42.065065],
        [-93.255837, 42.064571],
        [-93.255558, 42.064508],
        [-93.255322, 42.064555],
        [-93.254657, 42.064508],
        [-93.254292, 42.064316],
        [-93.253841, 42.064253],
        [-93.253198, 42.064444],
        [-93.253047, 42.06481],
        [-93.253005, 42.065702],
        [-93.251953, 42.065718],
        [-93.251803, 42.065718],
        [-93.251803, 42.075658],
        [-93.251953, 42.075674],
        [-93.252618, 42.075721],
        [-93.252769, 42.075626],
        [-93.252704, 42.074559],
        [-93.25279, 42.074336],
        [-93.253112, 42.074224],
        [-93.253112, 42.073794],
        [-93.253412, 42.073428],
        [-93.253605, 42.073348],
        [-93.254099, 42.072982],
        [-93.254743, 42.072759],
        [-93.254764, 42.071469],
        [-93.254592, 42.070736],
        [-93.254507, 42.070577],
        [-93.254592, 42.070449],
        [-93.254828, 42.070577],
        [-93.254828, 42.070704],
        [-93.255107, 42.071246],
        [-93.255, 42.071405],
        [-93.255107, 42.0715],
        [-93.255107, 42.072775],
        [-93.255193, 42.073014],
        [-93.25603, 42.073762],
        [-93.256137, 42.073969],
        [-93.257318, 42.074845],
        [-93.257253, 42.074973],
        [-93.257253, 42.075116],
        [-93.257661, 42.075546],
        [-93.257854, 42.075897],
        [-93.258111, 42.076852],
        [-93.258111, 42.077457],
        [-93.258176, 42.077633],
      ],
    ],
  },
}
