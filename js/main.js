/**
 * Created by RG on 27.03.2016.
 */
const WMFACTIONS = ["Cryx", "Cygnar", "Khador", "Menoth", "Retribution", "Mercenaries", "Convergence"];
const HOFACTIONS = ["Trollbloods", "Skorne", "Minions", "Circle", "Legion"];


$("#systemList li a").click(function() {
    //$(this).parents(".btn-group").find("#system").html($(this).text());
    console.log(this);
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
        console.log(this);
        $("#faction").html($(this).text());
    })
});

$("#pointlimitList li a").click(function(){
    $("#pointlimit").html($(this).text());
});

$("#commit").click(function(){
    var datasource = $("#faction").html;
    $.getJSON({
        url: "file:///C:/Users/RG/WebstormProjects/fwkomm/data/"+datasource+".json",
        data: data,
        success: success
    });
    //$("#armytable table")
    //file:///C:/Users/RG/WebstormProjects/fwkomm/data/khador.json
})
