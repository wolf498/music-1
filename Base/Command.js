class Command {

    constructor(client) {
        this.client = client;

        Object.defineProperties(this, {
            client: { enumerable: false }
        });
    }

    config(conf) {
        this.help = {
            name: conf.name,
            aliases: conf.aliases ?? [],
            description: conf.description ?? "None",
            ownerOnly: !!conf.ownerOnly,
            permissions: conf.permissions ?? [],
            category: null,
            cooldown: 3000
        };
    }

    setCategory(cat, force = false) {
        this.help.category = !force && this.help.category ? this.help.category : cat;
    }

    get category() {
        return this.help.category;
    }

    get cooldown() {
        return this.help.cooldown;
    }

    run() {}

    toString() {
        return this.help.name;
    }

    toJSON() {
        return { ...this.help };
    }

}

module.exports = Command;