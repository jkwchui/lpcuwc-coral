(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{348:function(e,t,a){},587:function(e,t,a){"use strict";var n=a(348);a.n(n).a},652:function(e,t,a){"use strict";a.r(t);a(117);var n=a(413),r=a.n(n),o=a(425),s={components:{MglMap:o.a,MglRasterLayer:o.d},props:{init_center:{type:Object,default:{lng:20,lat:20}},init_zoom:{type:Number,default:4},container:{type:String,default:"map"}},data:function(){return{accessToken:"pk.eyJ1Ijoiamt3Y2h1aSIsImEiOiJpRU1vbDdnIn0.Pko9FI8omzfymX90V_59dg",mapStyle:"mapbox://styles/jkwchui/cjv872vku086d1fo4cp4lstji",center:{},zoom:10,rasterSource:{id:"dem",type:"raster-dem",url:"mapbox://mapbox.terrain-rgb"},rasterLayer:{id:"hillshading",source:"dem",type:"hillshade"}}},methods:{onMapLoaded:function(e){}},created:function(){this.mapbox=r.a,this.center=Object.assign({},this.init_center),this.zoom=this.init_zoom}},i=(a(587),a(4)),c=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"map-wrap"}},[a("MglMap",{attrs:{accessToken:e.accessToken,mapStyle:e.mapStyle,center:e.center,zoom:e.zoom},on:{"update:center":function(t){e.center=t},"update:zoom":function(t){e.zoom=t},load:e.onMapLoaded}},[a("MglRasterLayer",{attrs:{sourceId:e.rasterSource.id,source:e.rasterSource,layerId:"hillshading",layer:e.rasterLayer}}),e._v(" "),e._t("default")],2)],1)},[],!1,null,null,null);t.default=c.exports}}]);