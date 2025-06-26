export class DaggerheartSpellSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "spell"],
            template: "systems/daggerheart/templates/items/spell-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "systems/daggerheart/templates/items/spell-sheet.html";
    }
}
