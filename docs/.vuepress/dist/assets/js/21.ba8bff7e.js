(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{357:function(e,a,n){},629:function(e,a,n){"use strict";var t=n(357);n.n(t).a},663:function(e,a,n){"use strict";n.r(a);var t=n(272),o=(n(267),n(269),n(619),{components:{"v-chart":t.a},methods:{getLevelOption:function(){return[{color:["#0064a6","#009b90","#e6a23c","#ad1644","#909399","#741669","#de6328"],itemStyle:{normal:{borderColor:"#777",borderWidth:0,gapWidth:1}}},{itemStyle:{normal:{borderColor:"#555",borderWidth:5,gapWidth:1},emphasis:{borderColor:"#ddd"}},upperLabel:{normal:{show:!0}}},{itemStyle:{normal:{borderWidth:2,gapWidth:1,borderColorSaturation:.6}}}]}},data:function(){return{treemap:{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}"},legend:{orient:"vertical",x:"right",data:["Personal \nEngagement","Exploration","Analysis","Conclusion & \n Evaluation","Communication"]},series:[{name:"IA criteria",type:"treemap",levels:this.getLevelOption(),data:[{name:"Personal Engagement",value:2,children:[{name:"PE 1: Independent thinking, Initiative and creativity",value:.75},{name:"PE 2: Personal interest / curiosity",value:.5},{name:"PE3: Personal input",value:.75}]},{name:"Exploration",value:6,children:[{name:"EX1: Research Question",value:1.25},{name:"EX2: Background Information",value:2},{name:"EX3: Methodology",value:2},{name:"EX4: Safety & Environmental Issues",value:.75}]},{name:"Analysis",value:6,children:[{name:"AN1: Raw data (quant, qual)",value:1.5},{name:"AN2: Data Processing",value:2},{name:"AN3: Uncertainties",value:1},{name:"AN4: Data Interpretation",value:1.5}]},{name:"Conclusion & Evaluation",value:6,children:[{name:"EV1: Relevance to RQ, supported by data",value:1.75},{name:"EV2: Relevance to scientific context",value:1.5},{name:"EV3: Discussion of Investigation str/weakness",value:1.5},{name:"EV4: Proposed Improvements, Extensions",value:1.25}]},{name:"Communication",value:4,children:[{name:"Comm 1: Structure of document",value:.75},{name:"Comm 2: Relevance and Conciseness",value:.75},{name:"Comm 3: Chemistry terminology (incl. unit, sig fig, decimal place usage)",value:1.25},{name:"Comm 4: Graphs, tables, images",value:1.25}]}]}]}}}}),i=(n(629),n(4)),r=Object(i.a)(o,function(){var e=this.$createElement;return(this._self._c||e)("v-chart",{attrs:{options:this.treemap}})},[],!1,null,null,null);a.default=r.exports}}]);