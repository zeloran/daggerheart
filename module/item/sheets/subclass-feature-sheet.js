export class DaggerheartSubclassFeatureSheet extends foundry.applications.sheets.ItemSheetV2 {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "subclass-feature"],
            template: "systems/daggerheart/templates/items/subclass-feature-sheet.html",
            width: 480,
            height: 350,
            resizable: true
        });
    }

    async getData(options) {
        const context = await super.getData(options);
        // context.item.system is an instance of SubclassFeatureModel!
        return context;
    }
}