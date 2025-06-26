export class DaggerheartItemSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item"],
            template: "templates/items/item-sheet.html",
            width: 500,
            height: 400
        });
    }

    get template() {
        return "templates/items/item-sheet.html";
    }
}
