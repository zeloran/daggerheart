export class DaggerheartCommunitySheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "community"],
            template: "systems/daggerheart/templates/items/community-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "systems/daggerheart/templates/items/community-sheet.html";
    }
}
