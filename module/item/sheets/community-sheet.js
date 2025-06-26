export class DaggerheartCommunitySheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "community"],
            template: "templates/items/community-sheet.html",
            width: 500,
            height: 400
        });
    }
    get template() {
        return "templates/items/community-sheet.html";
    }
}
