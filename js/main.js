/**
 * Created by RG on 27.03.2016.
 */
const WMFACTIONS = ["Cryx", "Cygnar", "Khador", "Menoth", "Retribution", "Mercenaries", "Convergence"];
const HOFACTIONS = ["Trollbloods", "Skorne", "Minions", "Circle", "Legion"];


$("#systemList li a").click(function() {
    $(this).parents(".btn-group").find("#system").html($(this).text());
});
    var sysSelected = $("#system").text();

    if (sysSelected == "Warmachine") {
        for (i in WMFACTIONS)
            $("#faction ul").append("<li>" + i + "</li>");
    }
    else if (sysSelected == "Hordes") {
        for (x in HOFACTIONS)
            $("#faction ul").append("<li>" + x + "</li>");

    }






    
