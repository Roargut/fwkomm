/**
 * Created by RG on 27.03.2016.
 */
const WMFACTIONS = ["Cryx", "Cygnar", "Khador", "Menoth", "Retribution", "Mercenaries", "Convergence"];
const HOFACTIONS = ["Trollbloods", "Skorne", "Minions", "Circle", "Legion"];


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
});

$("#commit").click(function() {
    var dataFile = $("#faction").html();
    $.getJSON("data/" + dataFile.toLowerCase() + ".json", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<td>" + val + "</td>");
        });
        $("#armytab").appendTo(items);
    })
});

    //$("#armytable table")
    //file:///C:/Users/RG/WebstormProjects/fwkomm/data/khador.json

