var fs = require('fs')
var space = require('./space.json')
var attrs = require('./attributeTypes.json')

// var spaceattrs = space.attributes.flatMap(at => at.skills.map(skill => Object.assign({}, skill, {attribute: at.name.toLowerCase()})))
// var spaceabs = spaceattrs.reduce(
//   (prev, curr) => (prev.includes(curr.attribute) ? prev : prev.concat([curr.attribute])),
//   [])

// attrs['space'] = {"attributes": spaceabs, skills: spaceattrs}
// attrs['space']['skills'] = spaceattrs

let dexterity = JSON.parse("[{\"name\":\"Acrobatics\",\"description\":\"Tumbling, leaping gracefully, and other gymnastic skills\",\"specializations\":\"---\",\"attribute\":\"dexterity\"},{\"name\":\"Archaic Guns\",\"description\":\"Using old-style black powder weapons\",\"specializations\":\"Type or model of gun: matchlock, musket, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Blaster\",\"description\":\"Using character-scale energy weapons\",\"specializations\":\"Type or model of blaster: blaster pistol, BlasTech DL-44, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Blaster Artillery\",\"description\":\"Using heavy mounted support weapons\",\"specializations\":\"Type or model of artillery: anti-infantry, surface-to-space, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Bowcaster\",\"description\":\"Using the Wookiee bowcaster\",\"specializations\":\"---\",\"attribute\":\"dexterity\"},{\"name\":\"Bows\",\"description\":\"Using bow-type weapons\",\"specializations\":\"Type or model of bow: long bow, crossbow, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Brawling Parry\",\"description\":\"Defense against brawling or melee attacks\",\"specializations\":\"Against specific type of brawling: boxing, martial arts, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Contortions\",\"description\":\"The ability to escape from bonds or tightly enclosed places; similar to the Jedi power Contort/Escape\",\"specializations\":\"---\",\"attribute\":\"dexterity\"},{\"name\":\"Dancing\",\"description\":\"Moving to a musical beat and looking good while doing it\",\"specializations\":\"---\",\"attribute\":\"dexterity\"},{\"name\":\"Dodge\",\"description\":\"Defense against any attack, and getting out of the way\",\"specializations\":\"Against specific type of attack: energy weapons, grenades, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Firearms\",\"description\":\"Using non-archaic projectile weapons\",\"specializations\":\"Type or model of weapon: pistol, machine gun, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Grenade\",\"description\":\"Throwing a portable explosive at a target area\",\"specializations\":\"Type or model of weapon: thermal detonator, anti-vehicle grenade, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Lightsaber\",\"description\":\"Using the ancient but powerful weapon of the Jedi Knights\",\"specializations\":\"---\",\"attribute\":\"dexterity\"},{\"name\":\"Melee Combat\",\"description\":\"Using hand-to-hand weapons\",\"specializations\":\"Type or model of weapon: club, vibro-blade, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Melee Parry\",\"description\":\"Using a melee weapon to defend against a melee combat attack\",\"specializations\":\"Against specific type of weapon: lightsaber, club, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Missile Weapon\",\"description\":\"Used to operate a missile and missile launchers\",\"specializations\":\"Type of model or missile: concussion missile, grenade launcher, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Pick Pocket\",\"description\":\"Picking pockets at sleight-of-hand tricks\",\"specializations\":\"---\",\"attribute\":\"dexterity\"},{\"name\":\"Running:\",\"description\":\"Moving quickly\",\"specializations\":\"Long distance, short sprint, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Shockball Fling\",\"description\":\"Throwing a shockball at an opponent\",\"specializations\":\"---\",\"attribute\":\"dexterity\"},{\"name\":\"Shockball Scoop\",\"description\":\"Catching or picking up a shockball\",\"specializations\":\"---\",\"attribute\":\"dexterity\"},{\"name\":\"Slingshot\",\"description\":\"Using a slingshot; useful for slaying giants\",\"specializations\":\"--\",\"attribute\":\"dexterity\"},{\"name\":\"Thrown Weapons\",\"description\":\"Using a non-projectile missile weapon, usually primitive or improvised\",\"specializations\":\"Type or model of weapon: knife, javelin, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Vehicle Blasters\",\"description\":\"Using vehicle-mounted energy weapons\",\"specializations\":\"Type or model of blaster: blaster cannon, laser cannon, etc.\",\"attribute\":\"dexterity\"},{\"name\":\"Wedsphere\",\"description\":\"Playing the sport of wedsphere\",\"specializations\":\"---\",\"attribute\":\"dexterity\"}]")

let knowledge = JSON.parse("[{\"name\":\"Accounting\",\"description\":\"Number crunching\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Agriculture\",\"description\":\"Knowledge of farms and farming techniques\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Alien Species\",\"description\":\"Knowing facts and hearsay about other species\",\"specializations\":\"Species: Wookiees, Mon Calamari, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Artist\",\"description\":\"The ability to create aesthetically pleasing works of art (subjective, of course)\",\"specializations\":\"Type of art or culture: painting, Twilek art, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Brainwashing\",\"description\":\"Making a target completely obedient and subservient to either a specific cause or to the person doing the brainwashing\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Bureaucracy\",\"description\":\"Familiarity with the whys and hows of government organizations\",\"specializations\":\"Specific planet or administration: Tatooine, Bureau of Ships and Services, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Business Administration\",\"description\":\"The knowledge of how to run a business without bankrupting it\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Business\",\"description\":\"Knowledge of industry and/or business\",\"specializations\":\"Field or organization: starships, Stenar Fleet Systems, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Culinary Arts\",\"description\":\"Knowing how to prepare a meal without poisoning anyone accidentally\",\"specializations\":\"Type of dish or culture: pasta, Ewok cuisine, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Cultures\",\"description\":\"Knowledge of another culture\",\"specializations\":\"Planet or social group: Corellians, Alderaan royal family, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Drink Mixology\",\"description\":\"Knowledge and ability to make exotic drinks\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Economics\",\"description\":\"Management and production of material goods and services\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Home Economics\",\"description\":\"Managing a household\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Intimidation\",\"description\":\"The ability to threaten someone physically, verbally, or with body language\",\"specializations\":\"Specific type of intimidation: interrogation, bullying, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Languages\",\"description\":\"Comprehending and speaking alien or secret tongues\",\"specializations\":\"Specific language: Wookiee, Bocce, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Law Enforcement\",\"description\":\"Knowledge of law enforcement practices and procedures\",\"specializations\":\"Specific planet or organization: Tatooine, the Rebel Alliance, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Military History\",\"description\":\"Knowledge of military battles and tactics used in them\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Planetary Systems\",\"description\":\"Spatial, navigational, and physical information about an area or system\",\"specializations\":\"Specific system or planet: Hoth, Kessel, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Shockball\",\"description\":\"Knowledge of maneuvers and tactics for the sport of shockball\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Streetwise\",\"description\":\"How to make contact with informants or to conduct illegal activity. It also grants knowledge of crime bosses and gangs, and their activities\",\"specializations\":\"Planet or criminal organization: Corellia, Black Sun, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Survival\",\"description\":\"How to locate food, water, and shelter in hostile climes or areas\",\"specializations\":\"Type of environment: desert, poisonous atmosphere, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Tactics\",\"description\":\"Knowledge of how to place troops and materials to attack the enemy\",\"specializations\":\"Type of military unit: squads, fleets, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Traffic Control Procedures\",\"description\":\"Knowing the standard practices for landing on a ship or starport\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Torture\",\"description\":\"Causing a person physical harm in a controlled manner, usually to extract information or to exact a punishment\",\"specializations\":\"---\",\"attribute\":\"knowledge\"},{\"name\":\"Value\",\"description\":\"Setting the cost or worth of a particular object or service\",\"specializations\":\"Type of goods or planet’s markets: starships, Kessel, etc.\",\"attribute\":\"knowledge\"},{\"name\":\"Willpower\",\"description\":\"Mental resistance to outside coercion\",\"specializations\":\"Type of coercion to be resisted\",\"attribute\":\"knowledge\"}]")

let mechanical = JSON.parse("[{\"name\":\"Airship Operation\",\"description\":\"Piloting airship vehicles\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Aquatic Ship Operation\",\"description\":\"Piloting navel surface vehicles\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Archaic Starship Piloting\",\"description\":\"Piloting primitive or ancient starship design\",\"specializations\":\"Type or class of ship: Celaya-class courier, Corillian solar sails, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Astrogation\",\"description\":\"Calculating and making a jump into hyperspace\",\"specializations\":\"Trade route: Kessel run, Tatooine to Coruscant, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Beast Handling\",\"description\":\"The ability to keep an animal under control\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Beast Riding\",\"description\":\"Riding an animal\",\"specializations\":\"Type of animal: bantha, tauntaun, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Capital Ship Gunnery\",\"description\":\"Firing capital starship-scale weaponry\",\"specializations\":\"Type or model of weapon: concussion missiles, ion cannons, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Capital Ship Piloting\",\"description\":\"Piloting capital starship-scale starships\",\"specializations\":\"Type or class of ship: Imperial Star Destroyer, Corellian corvette, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Capital Ship Shields\",\"description\":\"Operating capital starship-scale shields\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Ground Vehicle Operation\",\"description\":\"Using a wheeled or tracked vehicle\",\"specializations\":\"Type or model of vehicle: compact assault vehicle, Juggernaut, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Holorecorder Operation\",\"description\":\"Using a ground effect vehicle\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Household Appliance Operation\",\"description\":\"Operating blenders, vacuums, and other everyday appliances\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Hover Vehicle Operation\",\"description\":\"Using a ground effect vehicle\",\"specializations\":\"Type or model of vehicle: hoverscout, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Jet Pack Operation\",\"description\":\"Using a jet pack\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Machinery Operation\",\"description\":\"Using heavy industrial machines\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Musical Instrument Operation\",\"description\":\"Using any musical instruments, except for one’s voice\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Powersuit Operation\",\"description\":\"Using a powered space suit\",\"specializations\":\"Type or model of suit: servo lifter, spacetrooper armor, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Repulsorlift Operation\",\"description\":\"Using a repulsorlift vehicle\",\"specializations\":\"Type or model of vehicle: XP-38 landspeeder, snowspeeder, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Sailed Nautical Vessel Operation\",\"description\":\"Piloting sail-powered navel vessels\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Sensors\",\"description\":\"Operation of scanner and sensor equipment\",\"specializations\":\"Type or model of scanner: hand scanner, heat sensor, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Space Transports\",\"description\":\"Piloting small freighters and light transports or shuttles\",\"specializations\":\"Type or model of transport: YT-1300 transport, Gallofree medium transport\",\"attribute\":\"mechanical\"},{\"name\":\"Starfighter Piloting\",\"description\":\"Piloting starfighters and snubfighters\",\"specializations\":\"Type or model of starfighter: X-wing, TIE-fighter, etc.\",\"attribute\":\"mechanical\"},{\"name\":\"Starship Gunnery\",\"description\":\"Firing space transports and starfighter weapons\",\"specializations\":\"Type or model of weapon: ion cannon, proton torpedoes\",\"attribute\":\"mechanical\"},{\"name\":\"Starship shields\",\"description\":\"Operating starship-scale shields\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Swoop Operation\",\"description\":\"Using a swoop, or scout or speeder bike\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Undersea Vehicle operation\",\"description\":\"Using a navel submersible vehicle\",\"specializations\":\"---\",\"attribute\":\"mechanical\"},{\"name\":\"Walker Operation\",\"description\":\"Using a mechanical walker\",\"specializations\":\"Type or model of walker: AT-AT, AT-PT, etc.\",\"attribute\":\"mechanical\"}]")

let perception = JSON.parse("[{\"name\":\"Bargain\",\"description\":\"The art of negotiating over goods and services\",\"specializations\":\"Kind of merchandise: droids, spice, etc.\",\"attribute\":\"perception\"},{\"name\":\"Command\",\"description\":\"Giving orders to those under your command\",\"specializations\":\"Type of unit: Rogue Squadron, Imperial Stormtroopers, etc.\",\"attribute\":\"perception\"},{\"name\":\"Con\",\"description\":\"Lying or giving misleading information\",\"specializations\":\"Type of conning: fast-talk, disguise, etc.\",\"attribute\":\"perception\"},{\"name\":\"Forgery\",\"description\":\"Forging a document or making a duplicate of a written or drawn item\",\"specializations\":\"Type of document: starship permits, security codes\",\"attribute\":\"perception\"},{\"name\":\"Gambling\",\"description\":\"Playing sabacc and other games of chance, and detecting cheaters\",\"specializations\":\"Game of chance: sabacc, Trin sticks, etc.\",\"attribute\":\"perception\"},{\"name\":\"Cesa\",\"description\":\"The ability to play the strategy game Cesa\",\"specializations\":\"---\",\"attribute\":\"perception\"},{\"name\":\"Hide\",\"description\":\"Hiding and object, including oneself, so it cannot be found\",\"specializations\":\"Camouflage\",\"attribute\":\"perception\"},{\"name\":\"Investigation\",\"description\":\"The ability to gather and make use of information regarding a person or organization’s activities\",\"specializations\":\"Local or field of investigation: Imperial City, criminal records\",\"attribute\":\"perception\"},{\"name\":\"Persuasion\",\"description\":\"Using language (including body language) to sway the opinions of others\",\"specializations\":\"Form of persuasion: debate, flirting\",\"attribute\":\"perception\"},{\"name\":\"Search\",\"description\":\"The ability to search a room, area, or person\",\"specializations\":\"Tracking\",\"attribute\":\"perception\"},{\"name\":\"Singing\",\"description\":\"The ability to sing well\",\"specializations\":\"---\",\"attribute\":\"perception\"},{\"name\":\"Sneak\",\"description\":\"The ability to move without other people noticing\",\"specializations\":\"Type of terrain: jungle, city, etc.\",\"attribute\":\"perception\"}]")

let strength = [
  {
    "name": "Brawling",
    "description": "Attacking without a weapon",
    "specializations": "Attack style: boxing, martial arts, etc.",
    "attribute": "strength"
  },
  {
    "name": "Cleaning",
    "description": "The ability to clean stuff, like your room",
    "specializations": "---",
    "attribute": "strength"
  },
  {
    "name": "Climbing/Jumping",
    "description": "Using physical prowess to climb or leap over obstacles",
    "specializations": "Climbing, jumping",
    "attribute": "strength"
  },
  {
    "name": "Digging",
    "description": "Using physical prowess to make a large hole in the ground",
    "specializations": "---",
    "attribute": "strength"
  },
  {
    "name": "Stamina",
    "description": "The ability to resist exertion or attacks on a character’s Strength, or to resist the effects of alcohol",
    "specializations": "---",
    "attribute": "strength"
  },
  {
    "name": "Swimming",
    "description": "The ability to swim over long distances, or using equipment to swim underwater",
    "specializations": "---",
    "attribute": "strength"
  }
];


const technical = [
  {
    "name": "Aquatic Vehicle Engineering",
    "description": "Creating new aquatic vehicle designs",
    "specializations": "Type or model of vessel",
    "attribute": "technical"
  },
  {
    "name": "Aquatic Vehicle Repair",
    "description": "Fixing or modifying naval surface or submersible vessels",
    "specializations": "Type or model of vessel",
    "attribute": "technical"
  },
  {
    "name": "Archaic Gun Repair",
    "description": "Fixing or modifying black powder weapons",
    "specializations": "Type or model of gun: black powder pistol, wheel-lock, etc.",
    "attribute": "technical"
  },
  {
    "name": "Armor Design",
    "description": "Creating new body armor types",
    "specializations": "Type or model of armor: stormtrooper armor, etc.",
    "attribute": "technical"
  },
  {
    "name": "Armor Repair",
    "description": "Fixing or modifying body or protective armor",
    "specializations": "Type or model of armor: stormtrooper armor, etc.",
    "attribute": "technical"
  },
  {
    "name": "Battle Station Engineering",
    "description": "Creating or modifying battle station designs",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Battle Station Repair",
    "description": "Fixing battle station installations",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Battle Station Weapon Engineering",
    "description": "Creating or modifying battle station-scale weapons",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Battle Station Weapon Repair",
    "description": "Fixing battle station-scale weapons",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Blaster Artillery Engineering",
    "description": "Creating or modifying blaster artillery support weapons",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Blaster Repair",
    "description": "Repairing or modifying blasters and other energy weapons",
    "specializations": "Type or model of blaster: blaster pistol, blaster artillery, etc.",
    "attribute": "technical"
  },
  {
    "name": "Blaster Engineering",
    "description": "Creating new blaster energy weapon designs",
    "specializations": "Type or model of weapon: blaster pistol, etc.",
    "attribute": "technical"
  },
  {
    "name": "Bowcaster Repair",
    "description": "Repairing the Wookiee bowcaster",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Bow Repair",
    "description": "Repairing bow-type weapons",
    "specializations": "Type or model of bow: long bow, crossbow, etc.",
    "attribute": "technical"
  },
  {
    "name": "Capital Ship Engineering",
    "description": "Creating new capital ship designs",
    "specializations": "Type or class of ship: Imperial Star Destroyer, etc.",
    "attribute": "technical"
  },
  {
    "name": "Capital Ship Repair",
    "description": "Repairing a capital-scale starship",
    "specializations": "Type or class of ship: Victory Star Destroyer, Nebulon B frigate",
    "attribute": "technical"
  },
  {
    "name": "Communications Repair",
    "description": "Repairing portable or character-scale communication devices",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Computer Engineering",
    "description": "Creating or modifying computer mainframes and datapads",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Computer Programm-\n\ning/Repair",
    "description": "Operating a computer or data terminal, or modifying computer programs or systems",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Construction",
    "description": "Repairing or modifying an existing structure or building",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Cyborg Technology",
    "description": "Knowledge of biomechanical enhancements",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Demolitions",
    "description": "Setting explosives to destroy an object or area",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Droid Engineering",
    "description": "Creating or modifying droid designs",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Droid Repair",
    "description": "Repairing a droid",
    "specializations": "Type or model of droid: probe droid, protocol droid, etc.",
    "attribute": "technical"
  },
  {
    "name": "Encryption",
    "description": "Securing and decoding a computer system or individual file",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Engineering",
    "description": "Creating new structures and designs",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Firearms Repair",
    "description": "Fixing or modifying firearms and slugthrowers",
    "specializations": "Type or model of gun: pistol, rifle, etc.",
    "attribute": "technical"
  },
  {
    "name": "First Aid",
    "description": "The ability to perform emergency life-saving field medicines",
    "specializations": "Species of patient: humans, Wookiees, etc.",
    "attribute": "technical"
  },
  {
    "name": "Ground Vehicle Engineering",
    "description": "Creating or modifying wheeled or tracked vehicle designs",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Ground Vehicle Repair",
    "description": "Fixing or modifying wheeled or tracked vehicles",
    "specializations": "Type or model of vehicle: compact assault vehicle, Juggernaut, etc.",
    "attribute": "technical"
  },
  {
    "name": "Holorecorder Repair",
    "description": "Fixing or modifying holorecorder devices",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Hover Vehicle Engineering",
    "description": "Creating new hover vehicle designs",
    "specializations": "Type or model of hover vehicle: hoverscout, etc.",
    "attribute": "technical"
  },
  {
    "name": "Hover Vehicle Repair",
    "description": "Fixing or modifying hover vehicles",
    "specializations": "Type or model of hover vehicle: hoverscout, etc.",
    "attribute": "technical"
  },
  {
    "name": "Jet Pack Engineering",
    "description": "Creating new jet pack designs",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Jet Pack Repair",
    "description": "Fixing or modifying jet packs",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Lightsaber Repair",
    "description": "Repairing the age-old weapon of the Jedi",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Machinery Repair",
    "description": "Fixing or Modifying industrial machinery",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Medicine",
    "description": "Performing complex operating procedures",
    "specializations": "Field of medicine: medicines, cyborging, etc.",
    "attribute": "technical"
  },
  {
    "name": "Melee Weapon Construction",
    "description": "Creating or modifying melee weapon designs",
    "specializations": "Type or model of weapon: sword, club, etc.",
    "attribute": "technical"
  },
  {
    "name": "Melee Weapon Repair",
    "description": "Fixing melee weapons",
    "specializations": "Type or model of weapon: vibro-axe, knife, etc.",
    "attribute": "technical"
  },
  {
    "name": "Musical Instrument Repair",
    "description": "Fixing or modifying musical instruments",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Powersuit Repair",
    "description": "Repairing powered suits",
    "specializations": "Type or model of suit: stormtrooper armor, etc.",
    "attribute": "technical"
  },
  {
    "name": "Prosthetic Design",
    "description": "Creating or modifying prosthetic devices",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Prosthetic Repair",
    "description": "Repairing prosthetic devices",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Repulsorlift Engineering",
    "description": "Creating new repulsorlift designs",
    "specializations": "Type or model of repulsorlift: landspeeder, etc.",
    "attribute": "technical"
  },
  {
    "name": "Repulsorlift Repair",
    "description": "Repairing repulsorlifts",
    "specializations": "Type or model of repulsorlift: landspeeder, etc.",
    "attribute": "technical"
  },
  {
    "name": "Rocket Pack Repair",
    "description": "Fixing or modifying rocket packs",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Sailed Nautical Vessel Repair",
    "description": "Fixing sailed nautical vessels",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Security",
    "description": "Bypassing security systems, coded alarms, locks, and the like",
    "specializations": "Type of security system: retinal locks, blast doors, etc.",
    "attribute": "technical"
  },
  {
    "name": "Space Transports Engineering",
    "description": "Creating new space transport designs",
    "specializations": "Type or model of ship: Gallofree transport, Corellian Action IV transport, etc.",
    "attribute": "technical"
  },
  {
    "name": "Space Transports Repair",
    "description": "Fixing or modifying space transports",
    "specializations": "Type or model of ship: YT-1300 transports, etc.",
    "attribute": "technical"
  },
  {
    "name": "Starfighter Engineering",
    "description": "Creating new starfighter designs",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Starfighter Repair",
    "description": "Fixing or modifying starfighters",
    "specializations": "Type or model of ship: X-wing, TIE-fighter",
    "attribute": "technical"
  },
  {
    "name": "Starship Weapon Engineering",
    "description": "Creating new starship weapon design",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Starship Weapon Repair",
    "description": "Fixing or modifying starship weaponry",
    "specializations": "Type or model of weapon: laser cannon, turbolasers, etc.",
    "attribute": "technical"
  },
  {
    "name": "Swoop Engineering",
    "description": "Creating new swoop designs",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Swoop Repair",
    "description": "Fixing or modifying swoops",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Walker Engineering",
    "description": "Creating new walker designs",
    "specializations": "---",
    "attribute": "technical"
  },
  {
    "name": "Walker Repair",
    "description": "Fixing or modifying walkers",
    "specializations": "Type or model of walker: AT-AT, AT-PT, etc.",
    "attribute": "technical"
  }
]

let force = [
  {
    name: "control",
    description: "Control is the Jedi’s ability to control her own body. A Jedi with control can access her own internal well of Force energy, learning harmony with and mastery over the functions of her own body.",
    attribute: "force"
  },
  {
    name: "sense",
    description: "Sense teaches a Jedi to sense the Force in other things beyond her own body. The Jedi learns to feel the bonds that connect all living things and gains the ability to understand how all things are interconnected. Sense governs powers such as detecting danger and learning information about the world around the Jedi.",
    attribute: "force"
  },
  {
    name: "alter",
    description: "A Jedi with alter learns how to change the distribution and nature of the Force. Jedi who have mastered alter can move physical objects with their minds, can help others control their own Force, or can manipulate the Force in the bodies of others. This power can be used to change the perceptions of others and make them come to incorrect conclusions.",
    attribute: "force"
  }
]

attrs['starwars'].skills = [].concat(dexterity, mechanical, knowledge, strength, perception, technical, force)
console.log(JSON.stringify(attrs))
fs.writeFileSync('attributeTypes.bak.json', JSON.stringify(attrs, null, 2))