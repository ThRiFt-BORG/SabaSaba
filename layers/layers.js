var wms_layers = [];

var format_Kenya_0 = new ol.format.GeoJSON();
var features_Kenya_0 = format_Kenya_0.readFeatures(json_Kenya_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kenya_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kenya_0.addFeatures(features_Kenya_0);
var lyr_Kenya_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kenya_0, 
                style: style_Kenya_0,
                popuplayertitle: 'Kenya',
                interactive: false,
                title: '<img src="styles/legend/Kenya_0.png" /> Kenya'
            });
var format_KenyanCounties_1 = new ol.format.GeoJSON();
var features_KenyanCounties_1 = format_KenyanCounties_1.readFeatures(json_KenyanCounties_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KenyanCounties_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KenyanCounties_1.addFeatures(features_KenyanCounties_1);
var lyr_KenyanCounties_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KenyanCounties_1, 
                style: style_KenyanCounties_1,
                popuplayertitle: 'Kenyan Counties',
                interactive: true,
    title: 'Kenyan Counties<br />\
    <img src="styles/legend/KenyanCounties_1_0.png" /> 0<br />\
    <img src="styles/legend/KenyanCounties_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/KenyanCounties_1_2.png" /> 3 - 4<br />\
    <img src="styles/legend/KenyanCounties_1_3.png" /> 5 - 6<br />\
    <img src="styles/legend/KenyanCounties_1_4.png" /> 7 - 8<br />' });

lyr_Kenya_0.setVisible(true);lyr_KenyanCounties_1.setVisible(true);
var layersList = [lyr_Kenya_0,lyr_KenyanCounties_1];
lyr_Kenya_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'ADM0ALT1EN': 'ADM0ALT1EN', 'ADM0ALT2EN': 'ADM0ALT2EN', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_KenyanCounties_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'County', 'ADM1_PCODE': 'ADM1_PCODE', 'Fatalities_Deaths': 'Fatalities', 'Fatalities_Under 18 yrs': 'Fatalities_Under 18 yrs', 'Fatalities_Gunshot_Deaths': 'Fatalities_Gunshot_Deaths', 'Fatalities_Newspaper_Links': 'Newspaper and Socials', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_Kenya_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM0_REF': 'TextEdit', 'ADM0ALT1EN': 'TextEdit', 'ADM0ALT2EN': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_KenyanCounties_1.set('fieldImages', {'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'Hidden', 'Fatalities_Deaths': 'TextEdit', 'Fatalities_Under 18 yrs': 'TextEdit', 'Fatalities_Gunshot_Deaths': 'Hidden', 'Fatalities_Newspaper_Links': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'Hidden', 'auxiliary_storage_labeling_lineanchorclipping': 'Hidden', 'auxiliary_storage_labeling_lineanchortype': 'Hidden', 'auxiliary_storage_labeling_lineanchortextpoint': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_Kenya_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'ADM0_REF': 'no label', 'ADM0ALT1EN': 'no label', 'ADM0ALT2EN': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_KenyanCounties_1.set('fieldLabels', {'ADM1_EN': 'inline label - visible with data', 'Fatalities_Deaths': 'inline label - always visible', 'Fatalities_Under 18 yrs': 'inline label - visible with data', 'Fatalities_Newspaper_Links': 'inline label - visible with data', });
lyr_KenyanCounties_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});