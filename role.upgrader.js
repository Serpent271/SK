var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.fullcheck && creep.carry.energy == 0) {
            creep.memory.fullcheck = false;
            creep.say('Empty');
        }
        if(!creep.memory.fullcheck && creep.carry.energy == creep.carryCapacity) {
            creep.memory.fullcheck = true;
            creep.say('Full');
        }

        if(creep.memory.fullcheck) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
                }
            }
        else {
            if(creep.withdraw(Game.getObjectById("57e3423caa32cbbe256ce51b"), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(11,24);
            }
        }
    }
}
module.exports = roleUpgrader;
