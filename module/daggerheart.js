// ES module entrypoint for Daggerheart system (Foundry V13+)

// Actor sheet
import { DaggerheartActorSheet } from "./actor/sheets/character-sheet.js";

// Item sheets
import { DaggerheartSpellSheet } from "./item/sheets/spell-sheet.js";
import { DaggerheartSubclassSheet } from "./item/sheets/subclass-feature-sheet.js";
import { DaggerheartAbilitySheet } from "./item/sheets/ability-sheet.js";
import { DaggerheartAncestrySheet } from "./item/sheets/ancestry-sheet.js";
import { DaggerheartCommunitySheet } from "./item/sheets/community-sheet.js";
import { DaggerheartItemSheet } from "./item/sheets/item-sheet.js";
import { DaggerheartArmorSheet } from "./item/sheets/armor-sheet.js";
import { DaggerheartWeaponSheet } from "./item/sheets/weapon-sheet.js";

Hooks.once("init", function() {
    console.log("Daggerheart | Initializing system");

    // Register custom actor sheets
    Actors.registerSheet("daggerheart", DaggerheartActorSheet, {
        types: ["character", "npc"],
        makeDefault: true
    });

    // Register custom item sheets (one for each type)
    Items.registerSheet("daggerheart", DaggerheartSpellSheet,      { types: ["spell"],       makeDefault: true });
    Items.registerSheet("daggerheart", DaggerheartSubclassSheet,   { types: ["subclass-feature"],    makeDefault: true });
    Items.registerSheet("daggerheart", DaggerheartAbilitySheet,    { types: ["ability"],     makeDefault: true });
    Items.registerSheet("daggerheart", DaggerheartAncestrySheet,   { types: ["ancestry"],    makeDefault: true });
    Items.registerSheet("daggerheart", DaggerheartCommunitySheet,  { types: ["community"],   makeDefault: true });
    Items.registerSheet("daggerheart", DaggerheartItemSheet,       { types: ["item"],        makeDefault: true });
    Items.registerSheet("daggerheart", DaggerheartArmorSheet,      { types: ["armor"],       makeDefault: true });
    Items.registerSheet("daggerheart", DaggerheartWeaponSheet,     { types: ["weapon"],      makeDefault: true });
});
