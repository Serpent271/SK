var roleHarvester = {

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
          if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
              creep.moveTo(Game.spawns.Spawn1);
          }
      }
      else {
          var sources = creep.room.find(FIND_SOURCES);
          if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
              creep.moveTo(sources[0]);
          }
      }
  }
}
module.exports = roleHarvester;
