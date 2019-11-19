
move_cm(10, 10);

function move_cm(x, y)

{

    var old_units = app.preferences.rulerUnits;

    app.preferences.rulerUnits = Units.CM;

    try {

        var bounds = app.activeDocument.activeLayer.bounds;

        var off_x = x - (bounds[2].value+bounds[0].value)/2;

        var off_y = y - bounds[1].value;

        var d1 = new ActionDescriptor();

        var r = new ActionReference();

        r.putEnumerated( charIDToTypeID( "Lyr " ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );

        d1.putReference( charIDToTypeID( "null" ), r );

        var d2 = new ActionDescriptor();

        d2.putUnitDouble( charIDToTypeID( "Hrzn" ), charIDToTypeID( "#Rlt" ), off_x*72/2.54 );

        d2.putUnitDouble( charIDToTypeID( "Vrtc" ), charIDToTypeID( "#Rlt" ), off_y*72/2.54 );

        d1.putObject( charIDToTypeID( "T   " ), charIDToTypeID( "Ofst" ), d2);

        executeAction( charIDToTypeID( "move" ), d1, DialogModes.NO );

     }

    catch (e) { alert(e); }

    app.preferences.rulerUnits = old_units;

}

function move_px(x, y)

{

    var old_units = app.preferences.rulerUnits;

    app.preferences.rulerUnits = Units.PIXELS;

    try {

        var bounds = app.activeDocument.activeLayer.bounds;

        var off_x = x - (bounds[2].value+bounds[0].value)/2;

        var off_y = y - bounds[1].value;

        var d1 = new ActionDescriptor();

        var r = new ActionReference();

        r.putEnumerated( charIDToTypeID( "Lyr " ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );

        d1.putReference( charIDToTypeID( "null" ), r );

        var d2 = new ActionDescriptor();

        d2.putUnitDouble( charIDToTypeID( "Hrzn" ), charIDToTypeID( "#Pxl" ), off_x );

        d2.putUnitDouble( charIDToTypeID( "Vrtc" ), charIDToTypeID( "#Pxl" ), off_y );

        d1.putObject( charIDToTypeID( "T   " ), charIDToTypeID( "Ofst" ), d2);

        executeAction( charIDToTypeID( "move" ), d1, DialogModes.NO );

        }

    catch (e) { alert(e); }

    app.preferences.rulerUnits = old_units;

}