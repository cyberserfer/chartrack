var fs = require('fs');
var armor = require('./data/gear_armor');
var mundane = require('./data/gear_mundane');
var shields = require('./data/gear_shields');
var handWeapons = require('./data/gear_weapons_hand');
var weapons = require('./data/gear_weapons');
var rangedWeapons = require('./data/gear_weapons_ranged');

var powers = require('./data/powers');

(() => {
  var gearFiles = [
    armor,
    mundane,
    shields,
    handWeapons,
    weapons,
    rangedWeapons
]
  const formattedGear = gearFiles.reduce((acc, file) => [ ...acc, ...file.map(obj => ({
    armor: obj['armor'],
    ap: obj['ap'],
    cost: obj['cost'],
    cover: (obj) => obj.name['en-US'].search(/shield|Shield/) ? obj[armor] : obj[cover],
    damage: obj['damage'],
    effects: (obj) => [
      ...obj['vs_lasers_only'] ? `${obj['vs_lasers_only']} vs lasers only` : '',
      ...obj['neg_4ap_vs_ballistic'] ? '-4 AP vs ballistic': '',
      ...obj['covers_torso'] ? 'Covers Torso' : '',
      ...obj['covers_legs'] ? 'Covers Legs' : '',
      ...obj['covers_arms'] ? 'Covers Arms' : '',
      ...obj['covers_head'] ? 'Covers Head' : '',
      ...obj['covers_face'] ? 'Covers Face' : '',
      ...obj['is_rigid'] ? 'Rigid' : '',
      ...obj['ap_vs_rigid_only'] ? '+2 AP vs rigid armor' : '',
      ...obj['requires_2_hands'] ? 'Requires 2 hands' : '',
      ...obj['parry_modifier'] ? '-1 Parry' : '',
      ...obj['heavy_weapon'] ? 'Heavy weapon' : ''
    ].filter(Boolean),
    minimumStrength: obj['min_str'],
    name: obj.name['en-US'],
    notes: obj.notes ? obj.notes['es-US'] : '',
    parry: obj['parry'] || obj['parry-modifier'],
    range: obj['range'] || obj['reach'],
    rof: obj['rof'],
    weight: obj['weight']
  }))], []
  )
  
  const deduped = [ ...new Set(formattedGear.map(e => JSON.stringify(e)))].map(e => JSON.parse(e));

  fs.writeFile('items.json', JSON.stringify(deduped), 'utf-8', function (err) {
    if (err) throw err;
    console.log('Write items file complete');
  });

const formattedPowers = powers.map(power => ({
    duration: power.duration['en-US'],
		name: power.name['en-US'],
		powerPoints: power['cost'],
		range: power['range'],
		rank: power['rank'],
		trappings: (power) => [
      ...power.additionalEffects['en-US'] ? power.additionalEffects['en-US'] : ''
    ].filter(Boolean),
}))
const dedupedPowers = [ ...new Set(formattedPowers.map(e => JSON.stringify(e)))].map(e => JSON.parse(e));

fs.writeFile('powers.json', JSON.stringify(dedupedPowers), 'utf-8', function (err) {
  if (err) throw err;
  console.log('Write powers file complete');
});


})()

