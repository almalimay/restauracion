var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Restauracin_1 = new ol.format.GeoJSON();
var features_Restauracin_1 = format_Restauracin_1.readFeatures(json_Restauracin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restauracin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restauracin_1.addFeatures(features_Restauracin_1);
var lyr_Restauracin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Restauracin_1, 
                style: style_Restauracin_1,
                interactive: true,
    title: 'Restauración<br />\
    <img src="styles/legend/Restauracin_1_0.png" /> Muy Alta<br />\
    <img src="styles/legend/Restauracin_1_1.png" /> Alta<br />\
    <img src="styles/legend/Restauracin_1_2.png" /> Media<br />\
    <img src="styles/legend/Restauracin_1_3.png" /> Baja<br />\
    <img src="styles/legend/Restauracin_1_4.png" /> Muy Baja<br />'
        });
var format_Municipio_Atoyac_2 = new ol.format.GeoJSON();
var features_Municipio_Atoyac_2 = format_Municipio_Atoyac_2.readFeatures(json_Municipio_Atoyac_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_Atoyac_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipio_Atoyac_2.addFeatures(features_Municipio_Atoyac_2);
var lyr_Municipio_Atoyac_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipio_Atoyac_2, 
                style: style_Municipio_Atoyac_2,
                interactive: true,
    title: 'Municipio_Atoyac<br />\
    <img src="styles/legend/Municipio_Atoyac_2_0.png" /> México<br />\
    <img src="styles/legend/Municipio_Atoyac_2_1.png" /> Puebla<br />\
    <img src="styles/legend/Municipio_Atoyac_2_2.png" /> Tlaxcala<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Restauracin_1.setVisible(true);lyr_Municipio_Atoyac_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Restauracin_1,lyr_Municipio_Atoyac_2];
lyr_Restauracin_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOMGEO': 'NOMGEO', 'estado': 'estado', 'Ha': 'Ha', 'km2': 'km2', 'Id': 'Id', 'gridcode': 'gridcode', 'Clasifi': 'Clasifi', });
lyr_Municipio_Atoyac_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CVEGEO': 'CVEGEO', 'NOMGEO': 'NOMGEO', 'estado': 'estado', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Ha': 'Ha', 'km2': 'km2', });
lyr_Restauracin_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOMGEO': 'TextEdit', 'estado': 'TextEdit', 'Ha': 'TextEdit', 'km2': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Clasifi': 'TextEdit', });
lyr_Municipio_Atoyac_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'CVEGEO': 'TextEdit', 'NOMGEO': 'TextEdit', 'estado': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Ha': 'TextEdit', 'km2': 'TextEdit', });
lyr_Restauracin_1.set('fieldLabels', {'CVEGEO': 'no label', 'NOMGEO': 'no label', 'estado': 'no label', 'Ha': 'no label', 'km2': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Clasifi': 'no label', });
lyr_Municipio_Atoyac_2.set('fieldLabels', {'OBJECTID': 'no label', 'CVEGEO': 'no label', 'NOMGEO': 'no label', 'estado': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Ha': 'no label', 'km2': 'no label', });
lyr_Municipio_Atoyac_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});