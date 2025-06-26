export class DaggerheartWeaponSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "weapon"],
            template: "templates/items/weapon-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "templates/items/weapon-sheet.html";
    }
}
