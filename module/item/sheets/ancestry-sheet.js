export class DaggerheartAncestrySheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "ancestry"],
            template: "systems/daggerheart/templates/items/ancestry-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "systems/daggerheart/templates/items/ancestry-sheet.html";
    }
}
