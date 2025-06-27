import { ItemSheet } from "foundryvtt";

export class DaggerheartSubclassFeatureSheet extends ItemSheet {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "item", "subclass-feature"],
            template: "systems/daggerheart/templates/items/subclass-feature-sheet.html",
            width: 500,
            height: 400,
            resizable: true
        });
    }

    /** @override */
    getData(options) {
        const data = super.getData(options);
        data.system = this.item.system;
        return data;
    }
}