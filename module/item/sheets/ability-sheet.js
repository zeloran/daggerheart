export class DaggerheartAbilitySheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "ability"],
            template: "templates/items/ability-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "templates/items/ability-sheet.html";
    }
}
