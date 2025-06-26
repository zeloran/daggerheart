export class DaggerheartActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "actor"],
            template: "templates/actors/character-sheet.html",
            width: 600,
            height: 400
        });
    }

    get template() {
        return "templates/actors/character-sheet.html";
    }
}