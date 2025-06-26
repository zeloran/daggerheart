export class DaggerheartArmorSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "armor"],
            template: "systems/daggerheart/templates/items/armor-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "systems/daggerheart/templates/items/armor-sheet.html";
    }
}
