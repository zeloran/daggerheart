export class DaggerheartAncestrySheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "ancestry"],
            template: "templates/items/ancestry-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "templates/items/ancestry-sheet.html";
    }
}
