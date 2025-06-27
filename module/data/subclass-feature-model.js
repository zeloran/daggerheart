const { DataModel, fields } = foundry.data;

export class SubclassFeatureModel extends DataModel {
    static defineSchema() {
        return {
            baseClass: new fields.StringField({ required: true, initial: "" }),
            subclass: new fields.StringField({ required: true, initial: "" }),
            featureType: new fields.StringField({ required: true, initial: "foundation" }), // foundation, specialization, mastery
            description: new fields.HTMLField({ initial: "" }),
            effect: new fields.HTMLField({ initial: "" }),
            trigger: new fields.HTMLField({ initial: "" })
        };
    }
}