var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.fullcheck && creep.carry.energy == 0) {
            creep.memory.fullcheck = false;
            creep.say('harvesting');
	    }
	    if(!creep.memory.fullcheck && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.fullcheck = true;
	        creep.say('building');
	    }

	    if(creep.memory.fullcheck) {
	        var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax && structure.structureType != STRUCTURE_WALL
          });

          if (structure != undefined) {
            if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
              creep.moveTo(structure)
                }
            }
	    }
      else {
          if(creep.withdraw(Game.getObjectById("57e3423caa32cbbe256ce51b"), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
              creep.moveTo(11,24);
            }
	    }
	}
};

module.exports = roleRepairer;
