var roleHarvester = require('role.harvester');
var roleHarvesterS1 = require('role.harvesterS1');
var roleHarvesterS2 = require('role.harvesterS2');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleCourier = require('role.courier');
var roleRepairer = require('role.repairer');
//var harvester_w59n9 = require('role.harvester_w59n9')

module.exports.loop = function () {

  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  var harvestersS1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterS1');
  var harvestersS2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterS2');
  var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
  var courier = _.filter(Game.creeps, (creep) => creep.memory.role == 'courier');
  var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
//  var harvester_w59n9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester_w59n9');

//  if(harvesters.length < 2) {
//          var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'harvester', fullcheck: false});
//          console.log('Spawning new harvester: ' + newName);
//  }

//  if(harvester_w59n9.length < 1) {
  //    newName = (Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], harvester_w59n9_1, {role: 'harvester_w59n9', fullcheck: false});
    //  console.log('Spawning new Harvester for W59N9: ' + newName);
      //newName = (Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], harvester_w59n9_2, {role: 'harvester_w59n9', fullcheck: false});
      //console.log('Spawning new Harvester for W59N9: ' + newName);

  if(harvestersS1.length < 1) {
          var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], undefined, {role: 'harvesterS1', fullcheck: false});
          console.log('Spawning new S1-harvester: ' + newName);
  }
  if(courier.length < 1) {
          var newName = Game.spawns['Spawn1'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'courier', fullcheck: false});
          console.log('Spawning new courier: ' + newName);
  }
  if(harvestersS2.length < 1) {
          var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], undefined, {role: 'harvesterS2', fullcheck: false});
          console.log('Spawning new S2-harvester: ' + newName);
  }
  if(upgrader.length < 3) {
          var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], undefined, {role: 'upgrader', fullcheck: false});
          console.log('Spawning new upgrader: ' + newName);
  }
  if(builder.length < 2) {
          var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE], undefined, {role: 'builder', fullcheck: false});
          console.log('Spawning new builder: ' + newName);
  }
  if(repairer.length < 1) {
          var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'repairer', fullcheck: false});
          console.log('Spawning new builder: ' + newName);
  }
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'harvesterS1') {
            roleHarvesterS1.run(creep);
        }
        if(creep.memory.role == 'harvesterS2') {
            roleHarvesterS2.run(creep);
        }
        if(creep.memory.role == 'courier') {
            roleCourier.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
    }
}
