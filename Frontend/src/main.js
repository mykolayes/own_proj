/**
 * Created by chaika on 25.01.16.
 */
var total_price = 0;

var region, faction, gender, char_class, lvl;
var guild = false;
var gold = badges = emblems = honor_pts = arena_pts =
    achievement_pts = mounts = pets = toys = 0;
var rank = "no";
var rank_times = 1;
var hks = twos = threes = fives = 0;
var tenN = tw_fiveN = tenHC = tw_fiveHC = 0;
var note;

$(function(){
    //This code will execute when the page is ready
    // var PizzaMenu = require('./pizza/PizzaMenu');
    // var PizzaCart = require('./pizza/PizzaCart');
        //var fields_fill_logic = require('./fields_fill_logic');
    //var price_calc_logic = require('./price_calc_logic');
    // PizzaCart.initialiseCart();
    // PizzaMenu.initialiseMenu();

    //general
    $("[name='region']").click(function() {
        region = this.value;
        $("#region").css({"border-color": "initial", "border-width":"initial", "border-style":"initial"});
    });
    $("[name='faction']").click(function() {
        faction = this.value;
        $("#faction").css({"border-color": "initial", "border-width":"initial", "border-style":"initial"});
    });
    $("[name='gender']").click(function() {
        gender = this.value;
        $("#gender").css({"border-color": "initial", "border-width":"initial", "border-style":"initial"});
    });
    $("#char_class").change(function() {
        char_class = this.value;
        $("#char_class").css({"border-color": "darkgrey", "border-width":"1px", "border-style":"solid"});
    });
    $("[name='level']").keyup(function() {
        if(this.value > 80) this.value = "80";
        lvl = this.value;
        $("#lvl").css({"border-color": "darkgrey", "border-width":"1px", "border-style":"solid"});
        price_calc_logic();
    });
    $("[name='guild']").click(function() {
        guild = this.checked;
    });

    //currencies
    $("[name='gold']").keyup(function() {
        if(this.value > 999999) this.value = "999999";
        gold = this.value;
        price_calc_logic();
    });
    $("[name='badges']").keyup(function() {
        if(this.value > 9999) this.value = "9999";
        badges = this.value;
        price_calc_logic();
    });
    $("[name='emblems']").keyup(function() {
        if(this.value > 9999) this.value = "9999";
        emblems = this.value;
        price_calc_logic();
    });
    $("[name='honor_pts']").keyup(function() {
        if(this.value > 99999) this.value = "99999";
        honor_pts = this.value;
        price_calc_logic();
    });
    $("[name='arena_pts']").keyup(function() {
        if(this.value > 9999) this.value = "9999";
        arena_pts = this.value;
        price_calc_logic();
    });

    //achievements
    $("[name='achievements']").keyup(function() {
        if(this.value > 10500) this.value = "10500";
        achievement_pts = this.value;
        price_calc_logic();
    });
    $("[name='mounts']").keyup(function() {
        if(this.value > 190) this.value = "190";
        mounts = this.value;
        price_calc_logic();
    });
    $("[name='pets']").keyup(function() {
        if(this.value > 178) this.value = "178";
        pets = this.value;
        price_calc_logic();
    });
    $("[name='toys']").keyup(function() {
        if(this.value > 50) this.value = "50";
        toys = this.value;
        price_calc_logic();
    });

    //pvp
    $("#pvp_rank").change(function() {
        rank = this.value;
        price_calc_logic();
    });
    $("#pvp_rank_times").change(function() {
        rank_times = this.value;
        price_calc_logic();
    });
    $("[name='hks']").keyup(function() {
        if(this.value > 1000000) this.value = "1000000";
        hks = this.value;
        price_calc_logic();
    });
    $("[name='2v2']").keyup(function() {
        if(this.value > 3000) this.value = "3000";
        twos = this.value;
        price_calc_logic();
    });
    $("[name='3v3']").keyup(function() {
        if(this.value > 3000) this.value = "3000";
        threes = this.value;
        price_calc_logic();
    });
    $("[name='5v5']").keyup(function() {
        if(this.value > 3000) this.value = "3000";
        fives = this.value;
        price_calc_logic();
    });

    //pve
    $("[name='10n']").keyup(function() {
        if(this.value > 12) this.value = "12";
        tenN = Number(this.value);
        price_calc_logic();
    });
    $("[name='25n']").keyup(function() {
        if(this.value > 12) this.value = "12";
        tw_fiveN = Number(this.value);
        price_calc_logic();
    });
    $("[name='10hc']").keyup(function() {
        if(this.value > 12) this.value = "12";
        tenHC = Number(this.value);
        price_calc_logic();
    });
    $("[name='25hc']").keyup(function() {
        if(this.value > 12) this.value = "12";
        tw_fiveHC = Number(this.value);
        price_calc_logic();
    });

    //other
    $("#note-area").keyup(function(){
        note = this.value;
    });

    $(".btn-sell").click(function(){
       //  if(lvl){
       // alert(region);
       //  }
        //price_calc_logic();
        if(region && faction && gender && char_class && lvl){
            alert("Success!");
        }
        else{
            if(!region){
                $("#region").css({"border-color": "red", "border-width":"1px", "border-style":"solid"});
            }
            //     else{
            //     $("#region").css({"border-color": "initial", "border-width":"initial", "border-style":"initial"});
            // }
            if(!faction){
                $("#faction").css({"border-color": "red", "border-width":"1px", "border-style":"solid"});
            }
            if(!gender){
                $("#gender").css({"border-color": "red", "border-width":"1px", "border-style":"solid"});
            }
            if(!char_class){
                $("#char_class").css({"border-color": "red", "border-width":"1px", "border-style":"solid"});
            }
            if(!lvl){
                $("#lvl").css({"border-color": "red", "border-width":"1px", "border-style":"solid"});
            }
            alert("Please fill in all the required fields first.");

        }
    });

    $(".zero-default").blur(function(){
        if(!this.value){
            this.value = "0";
        }
    });
});

function price_calc_logic(){
    total_price = 0;
    if(lvl){
        total_price+=lvl/2;
    }
    if(rank != "no"){
        switch(rank) {
            case "challenger": total_price+=5*Number(rank_times); break;
            case "rival": total_price+=10*Number(rank_times); break;
            case "duelist": total_price+=15*Number(rank_times); break;
            case "gladiator": total_price+=50*Number(rank_times); break;
            case "r1": total_price+=100*Number(rank_times); break;
        }
    }
    if(hks >= 250000){
        total_price+=50;
    }
    else if (hks >= 100000){
        total_price+=25;
    }
    total_price+=twos/100;
    total_price+=threes/100;
    total_price+=fives/100;

    total_price+=gold/500;
    total_price+=badges/1000;
    total_price+=emblems/1000;
    total_price+=honor_pts/1000;
    total_price+=arena_pts/100;

    total_price+=achievement_pts/40;
    total_price+=mounts/4;
    total_price+=pets/5;
    total_price+=toys/2;

    total_price+=tenN;
    total_price+=tw_fiveN;
    total_price+=tenHC*2;
    total_price+=tw_fiveHC*5;


    $(".approx-price-actual-value").text(Math.round(total_price));
}