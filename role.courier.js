var roleCourier = {

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
      var targets = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
            return (
              (
                (structure.structureType == STRUCTURE_EXTENSION ||
                structure.structureType == STRUCTURE_SPAWN ||
                structure.structureType == STRUCTURE_TOWER ||
                structure.structureType == STRUCTURE_STORAGE) &&
                structure.energy < structure.energyCapacity
              )
            );
          }
      });
      if(creep.memory.fullcheck && creep.carry.energy == 0) {
          creep.memory.fullcheck = false;
          creep.say('Empty');
          (creep.withdraw(Game.getObjectById("57e361824ffb92eb2d13b126"), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
            creep.moveTo(19,28);
      }
      if(creep.memory.fullcheck) {
        if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }
      }
      else {
      if(creep.withdraw(Game.getObjectById("57e361824ffb92eb2d13b126"), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(19,28);
      }
    }
  }
}
module.exports = roleCourier;
