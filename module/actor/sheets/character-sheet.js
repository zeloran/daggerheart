export class DaggerheartActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["daggerheart", "sheet", "actor"],
            template: "systems/daggerheart/templates/actors/character-sheet.html",
            width: 600,
            height: 400
        });
    }

    get template() {
        return "systems/daggerheart/templates/actors/character-sheet.html";
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('.add-subclass').click(async ev => {
            const type = ev.currentTarget.dataset.type;
            const pack = game.packs.get('daggerheart.subclasses');
            await pack.getIndex();
            const entries = pack.index.filter(e => e.system?.subclassType === type);
            const options = entries.map(e => `<option value="${e._id}">${e.name}</option>`).join("");
            const content = `<select id="pick-subclass">${options}</select>`;
            new Dialog({
                title: `Choose ${type}`,
                content,
                buttons: {
                    ok: {
                        label: "Add",
                        callback: async dlg => {
                            const id = dlg.find('#pick-subclass').val();
                            const doc = await pack.getDocument(id);
                            await this.actor.createEmbeddedDocuments("Item", [doc.toObject()]);
                            this.render();
                        }
                    }
                }
            }).render(true);
        });
    }

}