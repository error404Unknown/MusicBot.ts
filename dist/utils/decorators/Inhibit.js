"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inhibit = void 0;
function Inhibit(func) {
    return function decorate(target, key, descriptor) {
        const original = descriptor.value;
        // eslint-disable-next-line func-names
        descriptor.value = async function (message, args) {
            const result = await func(message, args);
            if (result === undefined)
                return original.apply(this, [message, args]);
            return null;
        };
        return descriptor;
    };
}
exports.Inhibit = Inhibit;
