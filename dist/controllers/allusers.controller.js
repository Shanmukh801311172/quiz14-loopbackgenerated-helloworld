"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllusersController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
/**
 * OpenAPI response for allusers()
 */
const ALLUSERS_RESPONSE = {
    description: 'All Users Response',
    content: {
        'application/json': {
            schema: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        name: { type: 'string' },
                    },
                },
            },
        },
    },
};
/**
 * A simple controller to bounce back http requests
 */
let AllusersController = class AllusersController {
    constructor(req) {
        this.req = req;
    }
    // Map to `GET /allusers`
    allusers() {
        const users = [
            { id: 1, name: 'User 1' },
            { id: 2, name: 'User 2' },
        ];
        return users;
    }
};
exports.AllusersController = AllusersController;
tslib_1.__decorate([
    (0, rest_1.get)('/allusers'),
    (0, rest_1.response)(200, ALLUSERS_RESPONSE),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Array)
], AllusersController.prototype, "allusers", null);
exports.AllusersController = AllusersController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:paramtypes", [Object])
], AllusersController);
//# sourceMappingURL=allusers.controller.js.map