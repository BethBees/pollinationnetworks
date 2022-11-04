var data=[["Apple","Beetles",5.52],
["Bbean","Beetles",2.86],
["Cherry","Beetles",1.41],
["Cucumber","Beetles",83.87],
["Currants","Beetles",0],
["Raspberry","Beetles",3.62],
["Rbean","Beetles",0],
["Squash","Beetles",55.12],
["Strawberry","Beetles",16.36],
["Tomato","Beetles",0],
["Apple","Hoverflies",8.28],
["Bbean","Hoverflies",14.29],
["Cherry","Hoverflies",28.17],
["Cucumber","Hoverflies",0],
["Currants","Hoverflies",9.8],
["Raspberry","Hoverflies",1.64],
["Rbean","Hoverflies",6.08],
["Squash","Hoverflies",3.02],
["Strawberry","Hoverflies",20],
["Tomato","Hoverflies",0],
["Apple","Flies",15.86],
["Bbean","Flies",5.71],
["Cherry","Flies",8.45],
["Cucumber","Flies",3.23],
["Currants","Flies",27.45],
["Raspberry","Flies",1.05],
["Rbean","Flies",0],
["Squash","Flies",2.09],
["Strawberry","Flies",34.55],
["Tomato","Flies",0],
["Apple","Butterflies",0.69],
["Bbean","Butterflies",0],
["Cherry","Butterflies",0],
["Cucumber","Butterflies",1.61],
["Currants","Butterflies",0],
["Raspberry","Butterflies",0.12],
["Rbean","Butterflies",0.68],
["Squash","Butterflies",0],
["Strawberry","Butterflies",1.82],
["Tomato","Butterflies",0],
["Apple","Bumblebees",16.55],
["Bbean","Bumblebees",65.71],
["Cherry","Bumblebees",21.13],
["Cucumber","Bumblebees",6.45],
["Currants","Bumblebees",37.25],
["Raspberry","Bumblebees",44.98],
["Rbean","Bumblebees",33.78],
["Squash","Bumblebees",6.05],
["Strawberry","Bumblebees",1.82],
["Tomato","Bumblebees",80],
["Apple","Honeybees",33.79],
["Bbean","Honeybees",5.71],
["Cherry","Honeybees",25.35],
["Cucumber","Honeybees",3.23],
["Currants","Honeybees",9.8],
["Raspberry","Honeybees",43.57],
["Rbean","Honeybees",54.73],
["Squash","Honeybees",29.77],
["Strawberry","Honeybees",0],
["Tomato","Honeybees",20],
["Apple","Solitary Bees",19.31],
["Bbean","Solitary Bees",2.86],
["Cherry","Solitary Bees",15.49],
["Cucumber","Solitary Bees",1.61],
["Currants","Solitary Bees",9.8],
["Raspberry","Solitary Bees",3.04],
["Rbean","Solitary Bees",1.35],
["Squash","Solitary Bees",2.33],
["Strawberry","Solitary Bees",23.64],
["Tomato","Solitary Bees",0],
["Apple","Wasps",0],
["Bbean","Wasps",2.86],
["Cherry","Wasps",0],
["Cucumber","Wasps",0],
["Currants","Wasps",5.88],
["Raspberry","Wasps",1.99],
["Rbean","Wasps",3.38],
["Squash","Wasps",1.63],
["Strawberry","Wasps",1.82],
["Tomato","Wasps",0]]



 function sort(sortOrder){
                    return function(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)) }
                  }
var color = {'Unlinked ':'#3366CC','Beetles':'#7FC97F','Hoverflies':'#BEAED4','Flies':'#FDC086','Butterflies':'#FFFF99','Bumblebees':'#386CB0','Honeybees':'#F0027F','Solitary Bees':'#BF5B17','Wasps':'#666666'};




var g1 = svg.append("g").attr("transform","translate(217,50)");
                         var bp1=viz.bP()
                         .data(data)
                         .value(d=>d[2])
                         .min(10)
                         .pad(1)
                         .height(400)
                         .width(200)
                         .barSize(35)
                         .fill(d=>color[d.secondary])
.orient("vertical");

g1.call(bp1);g1.append("text")
                        .attr("x",-50).attr("y",-8)
                        .style("text-anchor","middle")
                        .text("Primary");
                        g1.append("text")
                        .attr("x", 250)
                        .attr("y",-8).style("text-anchor","middle")
                        .text("Secondary");
                        g1.append("text")
                        .attr("x",100).attr("y",-25)
                        .style("text-anchor","middle")
                        .attr("class","header")
                        .text("Site");

 g1.selectAll(".mainBars")
                        .on("mouseover",mouseover)
                        .on("mouseout",mouseout);

 g1.selectAll(".mainBars").append("text").attr("class","label")
                        .attr("x",d=>(d.part=="primary"? -32:35.6))
                        .attr("y",d=>+6)
                        .text(d=>d.key)
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

 g1.selectAll(".mainBars").append("text").attr("class","perc")
                        .attr("x",d=>(d.part=="primary"? -165:198))
                        .attr("y",d=>+6)
                        .text(function(d){ return d3.format("0.0%")(d.percent)})
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start")); 

function mouseover(d){
bp1.mouseover(d);
                            g1.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.0%")(d.percent)});
}

                     function mouseout(d){
bp1.mouseout(d);
                            g1.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.0%")(d.percent)});
}


