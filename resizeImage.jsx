current_document = app.activeDocument;
percent = 80;
var originalUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PERCENT;
app.activeDocument.activeLayer.resize(percent, percent, AnchorPosition.MIDDLECENTER);
app.preferences.rulerUnits = originalUnits;