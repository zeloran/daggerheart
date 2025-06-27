// ES module entrypoint for Daggerheart system (Foundry V13+)

import DHActorDataModel from "./data/DHActorDataModel.js";

import { DHCharacterSheet } from "./sheets/character-sheet.js";


/**
 * Roll the Duality Dice and handle Hope/Fear bookkeeping.
 * @param {number} diff  Difficulty to beat.
 * @param {object} actor The acting Foundry actor.
 * @returns {object}     { total, hopeDie, fearDie, withHope? }
 */
export async function rollDuality(diff, actor) {
    const roll = await new Roll("2d12").roll({ async: true });
    const [hopeDie, fearDie] = roll.terms[0].results.map(r => r.result);

    const traitMod = actor.system.traits[selectedTrait]; // supply in your UI
    const total = hopeDie + fearDie + traitMod;

    // Allocate token
    if (hopeDie > fearDie) actor.update({ "system.hope": actor.system.hope + 1 });
    else if (fearDie > hopeDie) game.dhFearPool = (game.dhFearPool || 0) + 1;

    // Critical success (doubles) is up to you to surface in chat

    return { total, hopeDie, fearDie, withHope: hopeDie > fearDie };
}

Hooks.once("init", function() {
    console.log("Daggerheart | Initializing system");

    // Register document classes
    CONFIG.Actor.dataModels.character = DHActorDataModel;


    Actors.registerSheet("daggerheart", DHCharacterSheet, {
        label: "Daggerheart Character",
        types: ["character"],   // must match your Actor type exactly
        makeDefault: true
    });

});
