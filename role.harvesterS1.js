var roleHarvesterS1 = {

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
          if(creep.transfer(Game.getObjectById("57e361824ffb92eb2d13b126"), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            //Game.creeps.Penelope.transfer(Game.getObjectById("57e3423caa32cbbe256ce51b"), RESOURCE_ENERGY)
              creep.moveTo(11,24);
          }
      }
      else {
          var sources = creep.room.find(FIND_SOURCES);
          if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
              creep.moveTo(sources[1]);
          }
      }
  }
}
module.exports = roleHarvesterS1;
