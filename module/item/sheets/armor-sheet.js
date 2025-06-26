export class DaggerheartArmorSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "armor"],
            template: "templates/items/armor-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "templates/items/armor-sheet.html";
    }
}
