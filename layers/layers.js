var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var format_LIMITES_1 = new ol.format.GeoJSON();
var features_LIMITES_1 = format_LIMITES_1.readFeatures(json_LIMITES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_1.addFeatures(features_LIMITES_1);
var lyr_LIMITES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITES_1, 
                style: style_LIMITES_1,
                interactive: true,
                title: '<img src="styles/legend/LIMITES_1.png" /> LIMITES'
            });
var format_SUBPARCE_2 = new ol.format.GeoJSON();
var features_SUBPARCE_2 = format_SUBPARCE_2.readFeatures(json_SUBPARCE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUBPARCE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUBPARCE_2.addFeatures(features_SUBPARCE_2);
var lyr_SUBPARCE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUBPARCE_2, 
                style: style_SUBPARCE_2,
                interactive: true,
                title: '<img src="styles/legend/SUBPARCE_2.png" /> SUBPARCE'
            });
var format_EJES_3 = new ol.format.GeoJSON();
var features_EJES_3 = format_EJES_3.readFeatures(json_EJES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJES_3.addFeatures(features_EJES_3);
var lyr_EJES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EJES_3, 
                style: style_EJES_3,
                interactive: true,
                title: '<img src="styles/legend/EJES_3.png" /> EJES'
            });
var format_MASA_4 = new ol.format.GeoJSON();
var features_MASA_4 = format_MASA_4.readFeatures(json_MASA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MASA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASA_4.addFeatures(features_MASA_4);
var lyr_MASA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MASA_4, 
                style: style_MASA_4,
                interactive: true,
                title: '<img src="styles/legend/MASA_4.png" /> MASA'
            });
var format_ELEMPUN_5 = new ol.format.GeoJSON();
var features_ELEMPUN_5 = format_ELEMPUN_5.readFeatures(json_ELEMPUN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELEMPUN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEMPUN_5.addFeatures(features_ELEMPUN_5);
var lyr_ELEMPUN_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELEMPUN_5, 
                style: style_ELEMPUN_5,
                interactive: true,
                title: '<img src="styles/legend/ELEMPUN_5.png" /> ELEMPUN'
            });
var format_ELEMLIN_6 = new ol.format.GeoJSON();
var features_ELEMLIN_6 = format_ELEMLIN_6.readFeatures(json_ELEMLIN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELEMLIN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEMLIN_6.addFeatures(features_ELEMLIN_6);
var lyr_ELEMLIN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELEMLIN_6, 
                style: style_ELEMLIN_6,
                interactive: true,
                title: '<img src="styles/legend/ELEMLIN_6.png" /> ELEMLIN'
            });

lyr_Ortoimagen_0.setVisible(true);lyr_LIMITES_1.setVisible(true);lyr_SUBPARCE_2.setVisible(true);lyr_EJES_3.setVisible(true);lyr_MASA_4.setVisible(true);lyr_ELEMPUN_5.setVisible(true);lyr_ELEMLIN_6.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_LIMITES_1,lyr_SUBPARCE_2,lyr_EJES_3,lyr_MASA_4,lyr_ELEMPUN_5,lyr_ELEMLIN_6];
lyr_LIMITES_1.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', });
lyr_SUBPARCE_2.set('fieldAliases', {'MAPA': 'MAPA', 'DELEGACIO': 'DELEGACIO', 'MUNICIPIO': 'MUNICIPIO', 'MASA': 'MASA', 'HOJA': 'HOJA', 'PARCELA': 'PARCELA', 'SUBPARCE': 'SUBPARCE', 'TIPO': 'TIPO', 'COORX': 'COORX', 'COORY': 'COORY', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'AREA': 'AREA', 'NINTERNO': 'NINTERNO', 'PCAT1': 'PCAT1', 'PCAT2': 'PCAT2', 'EJERCICIO': 'EJERCICIO', 'NUM_EXP': 'NUM_EXP', 'CONTROL': 'CONTROL', 'ALTITUD': 'ALTITUD', 'PENDIENTE': 'PENDIENTE', 'REFCAT': 'REFCAT', });
lyr_EJES_3.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'VIA': 'VIA', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', });
lyr_MASA_4.set('fieldAliases', {'MAPA': 'MAPA', 'DELEGACIO': 'DELEGACIO', 'MUNICIPIO': 'MUNICIPIO', 'MASA': 'MASA', 'HOJA': 'HOJA', 'TIPO': 'TIPO', 'COORX': 'COORX', 'COORY': 'COORY', 'NUMSYMBOL': 'NUMSYMBOL', 'AREA': 'AREA', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'PCAT1': 'PCAT1', 'PCAT2': 'PCAT2', 'EJERCICIO': 'EJERCICIO', 'NUM_EXP': 'NUM_EXP', 'CONTROL': 'CONTROL', 'REFCAT': 'REFCAT', });
lyr_ELEMPUN_5.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'ATRIBUTO': 'ATRIBUTO', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', });
lyr_ELEMLIN_6.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'VIA': 'VIA', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', });
lyr_LIMITES_1.set('fieldImages', {'MAPA': '', 'TTGGSS': '', 'NUMSYMBOL': '', 'FECHAALTA': '', 'FECHABAJA': '', 'NINTERNO': '', 'REFCAT': '', });
lyr_SUBPARCE_2.set('fieldImages', {'MAPA': 'Range', 'DELEGACIO': 'Range', 'MUNICIPIO': 'Range', 'MASA': 'TextEdit', 'HOJA': 'TextEdit', 'PARCELA': 'TextEdit', 'SUBPARCE': 'TextEdit', 'TIPO': 'TextEdit', 'COORX': 'TextEdit', 'COORY': 'TextEdit', 'NUMSYMBOL': 'Range', 'FECHAALTA': 'Range', 'FECHABAJA': 'Range', 'AREA': 'Range', 'NINTERNO': 'TextEdit', 'PCAT1': 'TextEdit', 'PCAT2': 'TextEdit', 'EJERCICIO': 'Range', 'NUM_EXP': 'Range', 'CONTROL': 'Range', 'ALTITUD': 'Range', 'PENDIENTE': 'TextEdit', 'REFCAT': 'TextEdit', });
lyr_EJES_3.set('fieldImages', {'MAPA': '', 'TTGGSS': '', 'VIA': '', 'NUMSYMBOL': '', 'FECHAALTA': '', 'FECHABAJA': '', 'NINTERNO': '', 'REFCAT': '', });
lyr_MASA_4.set('fieldImages', {'MAPA': 'Range', 'DELEGACIO': 'Range', 'MUNICIPIO': 'Range', 'MASA': 'TextEdit', 'HOJA': 'TextEdit', 'TIPO': 'TextEdit', 'COORX': 'TextEdit', 'COORY': 'TextEdit', 'NUMSYMBOL': 'Range', 'AREA': 'TextEdit', 'FECHAALTA': 'Range', 'FECHABAJA': 'Range', 'NINTERNO': 'TextEdit', 'PCAT1': 'TextEdit', 'PCAT2': 'TextEdit', 'EJERCICIO': 'Range', 'NUM_EXP': 'Range', 'CONTROL': 'Range', 'REFCAT': 'TextEdit', });
lyr_ELEMPUN_5.set('fieldImages', {'MAPA': 'Range', 'TTGGSS': 'TextEdit', 'ATRIBUTO': 'TextEdit', 'NUMSYMBOL': 'Range', 'FECHAALTA': 'Range', 'FECHABAJA': 'Range', 'NINTERNO': 'TextEdit', 'REFCAT': 'TextEdit', });
lyr_ELEMLIN_6.set('fieldImages', {'MAPA': '', 'TTGGSS': '', 'VIA': '', 'NUMSYMBOL': '', 'FECHAALTA': '', 'FECHABAJA': '', 'NINTERNO': '', 'REFCAT': '', });
lyr_LIMITES_1.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'no label', });
lyr_SUBPARCE_2.set('fieldLabels', {'MAPA': 'no label', 'DELEGACIO': 'no label', 'MUNICIPIO': 'no label', 'MASA': 'no label', 'HOJA': 'no label', 'PARCELA': 'no label', 'SUBPARCE': 'no label', 'TIPO': 'no label', 'COORX': 'no label', 'COORY': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'AREA': 'no label', 'NINTERNO': 'no label', 'PCAT1': 'no label', 'PCAT2': 'no label', 'EJERCICIO': 'no label', 'NUM_EXP': 'no label', 'CONTROL': 'no label', 'ALTITUD': 'no label', 'PENDIENTE': 'no label', 'REFCAT': 'no label', });
lyr_EJES_3.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'VIA': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'no label', });
lyr_MASA_4.set('fieldLabels', {'MAPA': 'no label', 'DELEGACIO': 'no label', 'MUNICIPIO': 'no label', 'MASA': 'no label', 'HOJA': 'no label', 'TIPO': 'no label', 'COORX': 'no label', 'COORY': 'no label', 'NUMSYMBOL': 'no label', 'AREA': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'PCAT1': 'no label', 'PCAT2': 'no label', 'EJERCICIO': 'no label', 'NUM_EXP': 'no label', 'CONTROL': 'no label', 'REFCAT': 'no label', });
lyr_ELEMPUN_5.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'ATRIBUTO': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'header label', });
lyr_ELEMLIN_6.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'VIA': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'no label', });
lyr_ELEMLIN_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});