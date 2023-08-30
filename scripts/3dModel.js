const viewer = new Cesium.Viewer("cesiumContainer");

const longitude = -75.59777;
const latitude = 40.03883;
const height = 100;

const position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);

// Создание точки
const point = viewer.entities.add({
  position: position,
  point: {
    pixelSize: 10,
    color: Cesium.Color.RED
  }
});
