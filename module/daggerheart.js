import { DaggerheartActorSheet } from "./actor/sheets/character-sheet.js";
import { DaggerheartItemSheet } from "./item/sheets/item-sheet.js";

Hooks.once("init", function() {
    console.log("Daggerheart | Initializing system");

    Actors.registerSheet("daggerheart", DaggerheartActorSheet, { makeDefault: true });
    Items.registerSheet("daggerheart", DaggerheartItemSheet, { makeDefault: true });
});
