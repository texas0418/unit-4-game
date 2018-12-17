$(document).ready(function () {

    var wolverine = {
        name: "Wolverine",
        healthPoint: 120,
        attackPower: 8,
        attackIncrease: 8,
        counterAttk: 25
    };
    var daredevil = {
        name: "Daredevil",
        healthPoint: 100,
        attackPower: 9,
        attackIncrease: 9,
        counterAttk: 20
    };
    var hulk = {
        name: "The Hulk",
        healthPoint: 150,
        attackPower: 13,
        attackIncrease: 13,
        counterAttk: 30
    };
    var deadpool = {
        name: "Deadpool",
        healthPoint: 180,
        attackPower: 10,
        attackIncrease: 10,
        counterAttk: 28
    };
    var chooseMutant = false;
    var enemy = [];
    var name = "";
    var defenderChosen = false;

    function restart() {
        location.reload();

    }


    $("#wolverine").on("click", function () {
        if (chooseMutant == false) {
            $("#wolverineCol").appendTo(".chosen");
            $("#daredevilCol").appendTo(".enemy");
            enemy.push("daredevil");
            $("#hulkCol").appendTo(".enemy");
            enemy.push("hulk");
            $("#deadpoolCol").appendTo(".enemy");
            enemy.push("deadpool");
            activeChar = wolverine;
            chooseMutant = true;
            name = "wolverine";
        }
    });
    $("#daredevil").on("click", function () {
        if (chooseMutant == false) {
            $("#daredevilCol").appendTo(".chosen");
            $("#wolverineCol").appendTo(".enemy");
            enemy.push("wolverine");
            $("#hulkCol").appendTo(".enemy");
            enemy.push("hulk");
            $("#deadpoolCol").appendTo(".enemy");
            enemy.push("deadpool");
            activeChar = daredevil;
            chooseMutant = true;
            name = "daredevil";
        }
    });
    $("#hulk").on("click", function () {
        if (chooseMutant == false) {
            $("#hulkCol").appendTo(".chosen");
            $("#wolverineCol").appendTo(".enemy");
            enemy.push("wolverine");
            $("#daredevilCol").appendTo(".enemy");
            enemy.push("daredevil");
            $("#deadpoolCol").appendTo(".enemy");
            enemy.push("deadpool");
            activeChar = hulk;
            chooseMutant = true;
            name = "hulk";
        }
    });
    $("#deadpool").on("click", function () {
        if (chooseMutant == false) {
            $("#huldeadpoolColkCol").appendTo(".chosen");
            $("#wolverineCol").appendTo(".enemy");
            enemy.push("wolverine");
            $("#daredevilCol").appendTo(".enemy");
            enemy.push("daredevil");
            $("#hulkCol").appendTo(".enemy");
            enemy.push("hulk");
            activeChar = deadpool;
            chooseMutant = true;
            name = "deadpool";

        }
    });


    $("#wolverine").on("click", function () {
        if (defenderChosen == false) {
            if (enemy.indexOf("wolverine") > -1) {
                $("#wolverineCol").appendTo(".defender");
                activeEnemy = wolverine;
                defenderChosen = true;
            }
        }
    });
    $("#daredevil").on("click", function () {
        if (defenderChosen == false) {
            if (enemy.indexOf("daredevil") > -1) {
                $("#daredevilCol").appendTo(".defender");
                activeEnemy = daredevil;
                defenderChosen = true;
            }
        }
    });
    $("#hulk").on("click", function () {
        if (defenderChosen == false) {
            if (enemy.indexOf("hulk") > -1) {
                $("#hulkCol").appendTo(".defender");
                activeEnemy = hulk;
                defenderChosen = true;
            }
        }
    });
    $("#deadpool").on("click", function () {
        if (defenderChosen == false) {
            if (enemy.indexOf("deadpool") > -1) {
                $("#deadpoolCol").appendTo(".defender");
                activeEnemy = deadpool;
                defenderChosen = true;
            }
        }
    });

    $('.btn').click(attack);
    function attack() {
        activeChar.healthPoint -= activeEnemy.counterAttk;
        activeEnemy.healthPoint -= activeChar.attackPower;
        activeChar.attackPower += activeChar.attackIncrease;
        $(".chosen .health").html(activeChar.healthPoint);
        $(".defender .health").html(activeEnemy.healthPoint);
        $(".attack-info").html("You attacked " + activeEnemy.name + " for " + activeChar.attackPower + " damage.");
        $(".counterattack-info").html("You were counter-attacked by " + activeEnemy.name + " for " + activeEnemy.counterAttk + " damage.");
        if (activeChar.healthPoint < 1) {
                $(".info").html("You have lost the fight!");
                $(".btn").remove();
                $(".fight-info").append('<button class="restart btn btn-danger">Restart</button>');
                $(".restart").click(restart);
        } else if (activeEnemy.healthPoint < 1) {
                $(".info").html("You have beaten " + activeEnemy.name + "! Pick your next opponent");
                $(".defender").remove();
                $(".btn").remove();
                defenderChosen = false;



            }
        }
    }
);
