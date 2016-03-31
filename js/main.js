/**
 * Created by RG on 27.03.2016.
 */
const WMFACTIONS = ["Cryx", "Cygnar", "Khador", "Menoth", "Retribution", "Mercenaries", "Convergence"];
const HOFACTIONS = ["Trollbloods", "Skorne", "Minions", "Circle", "Legion"];
var armyPointSize="";


$("#systemList li a").click(function() {
    //$(this).parents(".btn-group").find("#system").html($(this).text());
    $("#system").html($(this).text());
    $("#factionList").empty();

    var sysSelected = $("#system").text();

    if (sysSelected == "Warmachine") {
        for (i in WMFACTIONS)
            $("#factionList").append("<li><a href='#'>" + WMFACTIONS[i] + "</a></li>");
    }
    else if (sysSelected == "Hordes") {
        for (x in HOFACTIONS)
            $("#factionList").append("<li><a href='#'>" + HOFACTIONS[x] + "</a></li>");
    }
    $("#factionList li a").click(function() {
    //$(this).parents(".btn-group").find("#faction").html($(this).text());
        $("#faction").html($(this).text());
    })
});

$("#pointlimitList li a").click(function(){
    $("#pointlimit").html($(this).text());
    armyPointSize = $("#pointlimit").text();
});

$("#commit").click(function() {
    var dataFile = $("#faction").html();
    $.getJSON("data/" + dataFile.toLowerCase() + ".json", function (data) {
        var itemCaster = [];
        var itemWarjacks = [];
        var itemUnits = [];
        var itemSolos = [];
        //var itemAttachments = [];
        $.each(data.warcaster, function (key, val) {
            itemCaster.push("<tr><td>" + val.name + "</td><td>" + val.wjpoints + "</td></tr>");
        })
        $.each(data.warjacks, function (key, val) {
            itemWarjacks.push("<tr><td>" + val.name + "</td><td>" + val.pointcost + "</td></tr>");
        })
        $.each(data.units, function (key, val) {
            itemUnits.push("<tr><td>" + val.name + "</td><td>" + val.pointcostmin + "</td></tr>");
        })
        $.each(data.solos, function (key, val) {
            itemSolos.push("<tr><td>" + val.name + "</td><td>" + val.pointcost + "</td></tr>");
        })
        $("#casterTab").append(itemCaster);
        $("#warjackTab").append(itemWarjacks);
        $("#unitTab").append(itemUnits);
        $("#soloTab").append(itemSolos);
        $("#pointsize").text(armyPointSize);
    })
});

    //$("#armytable table")
    //file:///C:/Users/RG/WebstormProjects/fwkomm/data/khador.json

