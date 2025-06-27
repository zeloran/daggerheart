export class DHCharacterSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "character"],
            template: "systems/daggerheart/templates/actors/character.hbs",
            width: 600,
            height: 700,
            tabs: []           // add later if you paginate
        });
    }

    /** Provide sheet data to the template */
    getData(options) {
        const data = super.getData(options);
        data.system = data.actor.system;   // shorthand
        return data;
    }
}
