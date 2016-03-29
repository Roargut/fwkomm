/**
 * Created by RG on 27.03.2016.
 */
const WMFACTIONS = [Cryx, Cygnar, Khador, Menoth, Retribution, Mercenaries, Convergence];
const HOFACTIONS = [Trollbloods, Skorne, Minions, Circle, Legion];

$("#system>li").is("Warmachine"){
    for(i in WMFACTIONS) {
        $('#faction').add('ul').html(i);
    }
    
}