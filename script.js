require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(
      Map,
      FeatureLayer,
      MapView
    ) {

      // Create the map
      var map = new Map({
        basemap: "gray"
      });

      // Create the MapView
      var view = new MapView({
        container: "viewDiv",
map: map,
  center: [-90.1994, 38.627], // Center over St. Louis
  zoom: 11 // 
      });

      /*************************************************************
       * The PopupTemplate content is the text that appears inside the
       * popup. {fieldName} can be used to reference the value of an
       * attribute of the selected feature. HTML elements can be used
       * to provide structure and styles within the content. The
       * fieldInfos property is an array of objects (each object representing
       * a field) that is use to format number fields and customize field
       * aliases in the popup and legend.
       **************************************************************/

var template = {
  title: "Neighborhood: {NHD_NAME}", // Update title to display neighborhood name
  content: [
    {
      type: "fields",
      fieldInfos: [
        { fieldName: "NHD_NUM", label: "Neighborhood Number: ", visible: true },
        { fieldName: "ANGLE", label: "Angle: ", visible: true },
        { fieldName: "NHD_NUMTXT", label: "Neighborhood Number Text: ", visible: true },
        { fieldName: "NHD_NUM_ST", label: "Neighborhood Number State: ", visible: true },
        {fieldName: "Shape__Area", label: "Area: ", visible: true},

      ]
    }
  ]
};


     var symbol = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "https://cdn.iconscout.com/icon/premium/png-256-thumb/hockey-240-984443.png",
      width: "64px",
      height: "64px"
};
  var renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: symbol
    };
  
  
      // Reference the popupTemplate instance in the
      // popupTemplate property of FeatureLayer
      var featureLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/ArcGIS/rest/services/STL_Neighborhood/FeatureServer/0",
        outFields: ["*"],
        popupTemplate: template,
        renderer:renderer
      });
  
      map.add(featureLayer);
  

   /*
      featureLayer.renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        size: 6,
        color: "red",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };*/
    });
