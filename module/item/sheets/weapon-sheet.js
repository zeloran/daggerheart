export class DaggerheartWeaponSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "weapon"],
            template: "systems/daggerheart/templates/items/weapon-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "systems/daggerheart/templates/items/weapon-sheet.html";
    }
}
