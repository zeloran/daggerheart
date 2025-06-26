export class DaggerheartActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "actor"],
            template: "systems/daggerheart/templates/actors/character-sheet.html",
            width: 600,
            height: 400
        });
    }

    get template() {
        return "systems/daggerheart/templates/actors/character-sheet.html";
    }
}