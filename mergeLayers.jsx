docRef = app.activeDocument;
var groupOne = docRef.layerSets.add()
docRef.activeLayer = docRef.layers["Layer 0"];
docRef.activeLayer.remove();
docRef.mergeVisibleLayers();