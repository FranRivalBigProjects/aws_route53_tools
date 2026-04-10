function calc(){
let zones=parseFloat(document.getElementById('a').value)||0;
let queries=parseFloat(document.getElementById('b').value)||0;
let ttl=parseFloat(document.getElementById('c').value)||0;

// simplified model
let zoneCost = zones * 0.50;
let queryCost = queries * 0.40;
let total = zoneCost + queryCost;

let propagation = (ttl / 60).toFixed(2);

let level = total < 10 ? "Low DNS cost ✅" :
            total < 100 ? "Moderate cost ⚖️" :
            "High DNS cost ⚠️";

let insights = "";
if(ttl < 60) insights += "Low TTL. Faster updates but more queries.<br>";
if(queries > 100) insights += "High query volume. Optimize caching.<br>";
if(zones > 10) insights += "Multiple zones. Consolidate if possible.<br>";

document.getElementById('result').innerHTML =
"Total Cost: $" + total.toFixed(2) + "<br><br>" +
"Propagation (minutes): " + propagation + "<br><br>" +
level + "<br><br>" + insights;
}
