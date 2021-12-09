ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([179969.582684, 2702526.584330, 181815.552681, 2703780.317399]);
var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google 衛星影像',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "後浦1975",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3825',
                                alwaysInRange: true,
                                imageExtent: [180034.877242, 2702633.827561, 181628.833190, 2703656.104246]
                            })
                        });
var format_RC_2 = new ol.format.GeoJSON();
var features_RC_2 = format_RC_2.readFeatures(json_RC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_RC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RC_2.addFeatures(features_RC_2);
var lyr_RC_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RC_2, 
                style: style_RC_2,
                interactive: true,
                title: '<img src="styles/legend/RC_2.png" /> 后浦RC建築'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 后浦磚造建築'
            });

lyr_Google_0.setVisible(true);lyr_1975_1.setVisible(true);lyr_RC_2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_Google_0,lyr_1975_1,lyr_RC_2,lyr__3];
lyr_RC_2.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr__3.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_RC_2.set('fieldImages', {'Build_STR': '', 'Build_NO': '', });
lyr__3.set('fieldImages', {'Build_STR': '', 'Build_NO': '', });
lyr_RC_2.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr__3.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});