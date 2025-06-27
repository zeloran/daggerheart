export default class DHActorDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const { fields } = foundry.data;
        return {
            // Core traits
            traits: new fields.SchemaField({
                agility:   new fields.NumberField({ initial: 0, min: -3, max: 3 }),
                strength:  new fields.NumberField({ initial: 0, min: -3, max: 3 }),
                finesse:   new fields.NumberField({ initial: 0, min: -3, max: 3 }),
                instinct:  new fields.NumberField({ initial: 0, min: -3, max: 3 }),
                presence:  new fields.NumberField({ initial: 0, min: -3, max: 3 }),
                knowledge: new fields.NumberField({ initial: 0, min: -3, max: 3 })
            }),

            proficiency: new fields.NumberField({ initial: 1, min: 0 }),
            evasion:     new fields.NumberField({ initial: 10 }),

            // Physical health – each slot is a boolean “marked / clear”
            hitPoints:   new fields.ArrayField(
                new fields.BooleanField({ initial: false }),         // slot 1
                3                                                   // default size; class sheets can overwrite
            ),

            // Stress & Hope
            stressMarked: new fields.NumberField({ initial: 0, min: 0, max: 6 }),
            stressMax:    new fields.NumberField({ initial: 6 }),
            hope:         new fields.NumberField({ initial: 2, min: 0 }),

            // Narrative identity
            ancestry:  new fields.StringField(),
            community: new fields.StringField(),
            clazz:     new fields.StringField(),
            subclass:  new fields.StringField(),
            domains:   new fields.ArrayField(new fields.StringField())
        };
    }
}
