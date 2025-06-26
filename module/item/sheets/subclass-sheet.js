export class DaggerheartSubclassSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "subclass"],
            template: "templates/items/subclass-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "templates/items/subclass-sheet.html";
    }
}
