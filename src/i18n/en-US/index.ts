export default {
  monster: {
    name: 'Name',
    cr: 'CR',
    proficiencyBonus: 'Proficiency Bonus',
    proficiency: {
      lockToCr: 'Lock Bonus to CR',
      unlockFromCr: 'Unlock Bonus from CR',
    },
    size: 'Size',
    hp: {
      label: 'HP',
      hd: 'HD Count',
      type: 'HD Type',
      modifier: 'HP Modifier',
      lockToSize: 'Lock Hit Die Type to Size',
      unlockFromSize: 'Unlock Hit Die Type from Size',
      lockModifier: 'Lock HP Modifier to HD and CON',
      unlockModifier: 'Unlock HP Modifier from HD and CON',
    },
    stat: {
      STR: 'STR',
      DEX: 'DEX',
      CON: 'CON',
      INT: 'INT',
      WIS: 'WIS',
      CHA: 'CHA',
    },
    setHdByCr: 'Set HD to Match CR',
    type: 'Type',
    alignment: 'Alignment',
    ac: 'AC',
    setAcByCr: 'Set AC to Match CR',
    acType: 'AC Type',
    languages: 'Languages',
    movement: {
      type: {
        label: 'Movement Type',
        walk: 'walk',
        fly: 'fly',
        burrow: 'burrow',
        climb: 'climb',
        swim: 'swim',
      },
      speed: 'Speed',
      note: 'Note',
    },
    resistances: 'Damage Resistances',
    immunities: 'Damage Immunities',
    vulnerabilities: 'Damage Vulnerabilities',
    conditionImmunities: 'Condition Immunities',
    passivePerception: 'Passive Perception',
    sense: {
      blindsight: 'Blindsight',
      darkvision: 'Darkvision',
      tremorsense: 'Tremorsense',
      truesight: 'Truesight',
    },
    trait: {
      name: 'Name',
      trait: 'Trait',
      limitedUse: {
        count: 'Uses',
        rate: 'Reset Type',
        label: 'Limited Uses',
      },
      description: 'Description',
      save: 'Save Trait',
    },
    spellcasting: {
      class: 'Class',
      level: 'Caster Level',
      ability: 'Spellcasting Ability',
      save: 'Save DC',
      attack: 'Spell Attack Modifier',
      modifier: 'Ability Modifier',
      notes: 'Slot Casting Notes',
      atWillNotes: 'Innate Casting Notes',
      lockSave: 'Save Locked to Stats',
      unlockSave: 'Save Unlocked from Stats',
      lockAttack: 'Spell Attack Locked to Stats',
      unlockAttack: 'Spell Attack Unlocked from Stats',
      lockModifier: 'Spell Modifier Locked to Stats',
      unlockModifier: 'Spell Modifier Unlocked from Stats',
    },
  },
  editor: {
    // caption fields are allocated for each tab but not used at the moment
    basics: {
      label: 'Basics',
      caption: '',
    },
    saves: {
      label: 'Saving Throws',
      caption: '',
    },
    speeds: {
      label: 'Speeds',
      caption: '',
    },
    skills: {
      label: 'Skills',
      caption: '',
    },
    resistances: {
      label: 'Resistances and Immunities',
      caption: '',
    },
    senses: {
      label: 'Senses',
      caption: '',
    },
    traits: {
      label: 'Traits',
      caption: 'Always active passive abilities',
    },
    spellcasting: {
      label: 'Spellcasting',
      caption: 'Innate and Class-based Spellcasting',
      class: {
        label: 'Class Spellcasting',
        caption:
          'Slot-limited spellcasting derived from a player character class',
      },
      innate: {
        label: 'Innate Spellcasting',
        caption: 'At-will spellcasting derived from innate abilities',
        preamble: 'Innate Spellcasting Preamble',
        addNew: 'Add Innate Spell List',
      },
      slot: {
        all: 'All Known Spells',
        level: '{ordinal} Level',
        levelOrdinal: 'Ordinal Caster Level',
        knownAtLevel: '{ordinal} Level Spells',
        warlockSlots: '{0}-{1} level ({2} {3} level slots)',
        slotLabel: '{ordinal} level ({slots}): ',
        slotQuantity: '0 slots | 1 slot | {n} slots',
        cantrip: 'Cantrip',
        cantrips: 'Cantrips',
        showSlots: 'Show Slots',
        hideSlots: 'Hide Slots',
        classOnlyOn: 'Class Filter On',
        classOnlyOff: 'Class Filter Off',
        slots: 'Slots',
        useDefaultPreamble: 'Using Default Preamble',
        useCustomPreamble: 'Using Custom Preamble',
        preamble: 'Slot Spellcasting Preamble',
      },
    },
    proficient: 'Proficient',
    override: 'Override',
    expertise: 'Expertise',
    delete: 'Delete',
    addSpeed: 'Add Speed',
    addSkill: 'Add Skill',
    addTrait: 'Add Trait',
    deleteTrait: 'Delete Trait',
    attackMod: 'Attack Mod',
    statSave: 'Save DC',
    monsterToken: 'Monster',
    trait: 'Trait',
    plainTextNote: 'Plain Text Only',
    reset: 'Reset',
    resetTip: 'Reset to Default',
    crAnnotation: {
      title: 'CR Annotation Data',
      manual: 'Using Manual CR Estimation',
      automatic: 'Using Automatic CR Estimation',
      automaticShort: 'Automatic',
      manualShort: 'Manual',
      include: 'Included in CR Calculation',
      exclude: 'Excluded from CR Calculation',
      maxDamage: 'Expected Damage',
      maxSave: 'Highest DC',
      maxModifier: 'Highest Attack Modifier',
      ehpModifier: 'EHP Modifier',
      ehpMultiplier: 'EHP Multiplier',
      acModifier: 'EAC Modifier',
      multitarget: 'Multitarget',
      singletarget: 'Single Target',
      damage: 'damage',
      ehp: 'Effective HP',
    },
  },
  // note: add to these keys to provide additional default options for some of the dropdowns
  // since the monster fields for these keys just output the array contents, it should be (theoretically)
  // easy to swap out translations for default options, but monsters created in en-US won't automatically translate...
  skill: {
    ACROBATICS: 'Acrobatics',
    ANIMAL_HANDLING: 'Animal Handling',
    ARCANA: 'Arcana',
    ATHLETICS: 'Athletics',
    DECEPTION: 'Deception',
    HISTORY: 'History',
    INSIGHT: 'Insight',
    INTIMIDATION: 'Intimidation',
    INVESTIGATION: 'Investigation',
    MEDICINE: 'Medicine',
    NATURE: 'Nature',
    PERCEPTION: 'Perception',
    PERFORMANCE: 'Performance',
    PERSUASION: 'Persuasion',
    RELIGION: 'Religion',
    SLIGHT_OF_HAND: 'Sleight of Hand',
    STEALTH: 'Stealth',
    SURVIVAL: 'Survival',
  },
  damageType: {
    ACID: 'acid',
    BLUDGEONING: 'bludgeoning',
    BLUDEGONING_NM: 'non-magical bludgeoning',
    BLUDGEONING_NM_NA: 'non-magical non-adamintine bludgeoning',
    BLUDGEONING_NM_NS: 'non-magical non-silvered bludgeoning',
    COLD: 'cold',
    TRAPS: 'traps',
    SPELLS: 'spells',
    FIRE: 'fire',
    FORCE: 'force',
    LIGHTNING: 'lightning',
    NECROTIC: 'necrotic',
    PIERCING: 'piercing',
    PIERCING_NM: 'non-magical piercing',
    PIERCING_NM_NA: 'non-magical non-adamantine piercing',
    PIERCING_NM_NS: 'non-magical non-silvered piercing',
    MAGIC_GOOD: 'magical weapons wielded by good creatures',
    MAGIC_EVIL: 'magical weapons wielded by evil creatures',
    MAGIC_NEUTRAL: 'magical weapons wielded by neutral creatures',
    MAGIC_LAWFUL: 'magical weapons wielded by lawful creatures',
    MAGIC_CHAOTIC: 'magical weapons wielded by chaotic creatures',
    POISON: 'poison',
    PSYCHIC: 'psychic',
    RADIANT: 'radiant',
    RANGED: 'ranged attacks',
    MELEE: 'melee attacks',
    SLASHING: 'slashing',
    SLASHING_NM: 'non-magical slashing',
    SLASHING_NM_NA: 'non-magical non-adamantine slashing',
    SLASHING_NM_SN: 'non-magical non-silvered slashing',
    THUNDER: 'thunder',
    ALL_PHYSICAL_NM: 'non-magical slashing, piercing, and bludgeoning',
    ALL_PHYSICAL_NM_NA:
      "bludgeoning, piercing, and slashing from non-magical attacks that aren't adamantine",
  },
  attackType: {
    ACID: 'acid',
    BLUDGEONING: 'bludgeoning',
    COLD: 'cold',
    FIRE: 'fire',
    FORCE: 'force',
    LIGHTNING: 'lightning',
    NECROTIC: 'necrotic',
    PIERCING: 'piercing',
    POISON: 'poison',
    PSYCHIC: 'psychic',
    RADIANT: 'radiant',
    SLASHING: 'slashing',
    THUNDER: 'thunder',
  },
  condition: {
    BLINDED: 'blinded',
    CHARMED: 'charmed',
    DEAFENED: 'deafened',
    DISEASED: 'diseased',
    FRIGHTENED: 'frightened',
    GRAPPLED: 'grappled',
    INCAPACITATED: 'incapacitated',
    INVISIBLE: 'invisible',
    PARALYZED: 'paralyzed',
    PETRIFIED: 'petrified',
    POISONED: 'poisoned',
    PRONE: 'prone',
    RESTRAINED: 'restrained',
    STUNNED: 'stunned',
    UNCONSCIOUS: 'unconscious',
    SLEEP: 'sleep',
    EXHAUSTION: 'exhaustion',
  },
  recharge: {
    DAY: 'day',
    DAY_EACH: 'day each',
    AT_WILL: 'at will',
    LONG_REST: 'long rest',
    SHORT_REST: 'short rest',
    LONG_OR_SHORT: 'long or short rest',
  },
  statFull: {
    STR: 'Strength',
    DEX: 'Dexterity',
    CON: 'Constitution',
    INT: 'Intelligence',
    WIS: 'Wisdom',
    CHA: 'Charisma',
  },
  class: {
    BARBARIAN: 'Barbarian',
    BARD: 'Bard',
    CLERIC: 'Cleric',
    DRUID: 'Druid',
    FIGHTER: 'Fighter',
    MONK: 'Monk',
    PALADIN: 'Paladin',
    RANGER: 'Ranger',
    ROGUE: 'Rogue',
    SORCERER: 'Sorcerer',
    WARLOCK: 'Warlock',
    WIZARD: 'Wizard',
  },
  presets: {
    classSpellcasting:
      "<b><i>Spellcasting.</b></i> {'{'}NAME{'}'} is a {'{'}spellcasting.ordinal{'}'}-level spellcaster. Its spellcasting ability is {'{'}spellcasting.stat{'}'} (spell save {'{'}spellcasting.save{'}'}, {'{'}spellcasting.attack{'}'} to hit with spell attacks). {'{'}spellcasting.notes{'}'} {'{'}NAME{'}'} has the following {'{'}spellcasting.class{'}'} spells prepared:",
    innateSpellcasting:
      "<b><i>Innate Spellcasting.</b></i> {'{'}NAME{'}'}'s innate spellcasting ability is {'{'}spellcasting.stat{'}'} (spell save {'{'}spellcasting.save{'}'}, {'{'}spellcasting.attack{'}'} to hit with spell attacks). {'{'}spellcasting.notes{'}'} It can cast the following spells, requiring no material components:",
  },
}
