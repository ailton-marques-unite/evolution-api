"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const uuid_1 = require("uuid");
class Entity {
    constructor(props, id) {
        this.props = props;
        this._id = id || (0, uuid_1.v4)();
    }
    get id() {
        return this.id;
    }
    toJSON() {
        return {
            id: this._id,
            ...this.props,
        };
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map