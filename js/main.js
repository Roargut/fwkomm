/**
 * Created by RG on 27.03.2016.
 */
const WMFACTIONS = ["Cryx", "Cygnar", "Khador", "Menoth", "Retribution", "Mercenaries", "Convergence"];
const HOFACTIONS = ["Trollbloods", "Skorne", "Minions", "Circle", "Legion"];


$("#systemList li a").click(function() {
    $(this).parents(".btn-group").find("#system").html($(this).text());
    $("#factionList").empty();
});

$("#faction").click(function() {
    var sysSelected = $("#system").text();

    if (sysSelected == "Warmachine") {
        for (i in WMFACTIONS)
            $("#factionList").append("<li><a href='#'>" + WMFACTIONS[i] + "</a></li>");
    }
    else if (sysSelected == "Hordes") {
        for (x in HOFACTIONS)
            $("#factionList").append("<li><a href='#'>" + HOFACTIONS[x] + "</a></li>");
    }
});





    
