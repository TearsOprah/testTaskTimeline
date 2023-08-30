const viewer = new Cesium.Viewer("cesiumContainer");

fetch('./data/points.json')
  .then(response => response.json())
  .then(jsonData => {
    jsonData.forEach(pointData => {
      const longitude = pointData.longitude;
      const latitude = pointData.latitude;
      const height = 0;

      const position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);

      viewer.entities.add({
        position: position,
        point: {
          pixelSize: 10,
          color: Cesium.Color.GREEN
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
  })
  .catch(error => console.error('Error loading JSON:', error));
