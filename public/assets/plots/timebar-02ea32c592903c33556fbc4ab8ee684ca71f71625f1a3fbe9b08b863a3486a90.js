define([require],function(){function e(e){this.selector=e.selector||"#area4",this.margin=e.margin||{top:0,right:10,bottom:0,left:10},this.width=e.width||960,this.height=e.height||300,this.dataset=e.dataset||[];var t=this.height-(this.margin.top+this.margin.bottom);this.bar={width:10,maxHeight:t,padding:2},this.fontSize=e.fontSize||11,this.xScaler=d3.time.scale().rangeRound([0,this.width]),this.yScaler=d3.scale.linear().range([this.bar.maxHeight,0]),this.dateParser=d3.time.format("%Y-%m-%d").parse,this.bisectDate=d3.bisector(function(e){return e.date}).left}return e.prototype.loadAndRender=function(e){var t=this;d3.json(e,function(n,r){return n?(console.error("Can not load data for Timebar from url: "+e),1):(r.forEach(function(e){e.value=+e.value,e.date=t.dateParser(e.date)}),r.sort(function(e,t){return e.date-t.date}),void t.render(r))})},e.prototype.render=function(e){var t=this;t.dataset=e,t.xScaler.domain([new Date(e[0].date),d3.time.day.offset(new Date(e[e.length-1].date),1)]),t.yScaler.domain([0,d3.max(e,function(e){return e.value})]);var n=t.initCanvas(),r=n.select("g");t.bar.width=Math.round(t.width/(1*t.dataset.length))-t.bar.padding,r.selectAll(".bar").data(t.dataset).enter().append("rect").attr({"class":"bar",x:function(e){return t.xScaler(e.date)},width:t.bar.width,y:function(e){return t.yScaler(e.value)},height:function(e){return t.bar.maxHeight-t.yScaler(e.value)}}),r.selectAll(".barValues").data(t.dataset).enter().append("text").attr({x:function(e){return t.xScaler(e.date)+t.bar.width/2},y:function(e){return t.yScaler(e.value)+t.fontSize},fill:"white","text-anchor":"middle"}).text(function(e){return e.value}),t.addAxisX(n),t.addTooltip(n)},e.prototype.initCanvas=function(){var e=this,t=d3.select(e.selector).append("svg").attr({width:e.width,height:e.height});return t.append("g").attr("tranform","translate("+e.margin.left+","+e.margin.top+")"),t},e.prototype.addTooltip=function(){var e=d3.select("body").append("div").attr("class","tooltip").style("opacity",0),t=d3.time.format("%A, %e.%B");d3.selectAll(".bar").on("mouseover",function(n){e.transition().duration(200).style({opacity:.9,left:d3.event.pageX-10+"px",top:d3.event.pageY+"px"}).text(t(n.date))}).on("mouseout",function(){e.transition().duration(500).style("opacity",0)})},e.prototype.addAxisX=function(e){var t=this,n=d3.svg.axis().scale(t.xScaler).ticks(d3.time.mondays,1).tickFormat(d3.time.format("%d-%m-%y")).orient("bottom");return e.append("g").attr({"class":"x axis",transform:"translate(0,"+(t.height-t.margin.bottom+5)+")",fill:"steelblue"}).call(n),e},e});