export async function loadCesiumData() {
  const viewer = new Cesium.Viewer('cesiumContainer');

  const response = await fetch('./data/points.json');
  const jsonData = await response.json();

  jsonData.forEach(pointData => {
    const longitude = pointData.longitude;
    const latitude = pointData.latitude;
    const height = 0;

    const position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);

    const randomColor = Cesium.Color.fromRandom({ alpha: 1.0 });

    viewer.entities.add({
      position: position,
      point: {
        pixelSize: 10,
        color: randomColor
      },
      label: {
        text: pointData.label,
        font: "14pt monospace",
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -9),
      }
    });
  });
}
