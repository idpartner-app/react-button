"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ButtonComponent = function (_a) {
    var options = _a.options;
    react_1.default.useEffect(function () {
        var _a;
        var script = document.createElement('script');
        script.src = (_a = options.buttonScriptUri) !== null && _a !== void 0 ? _a : "https://install.idpartner.com/button.js";
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, [options.clientId]);
    var customHTML = "<id-partner id=\"".concat(options.clientId, "\" />");
    return (react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: customHTML } }));
};
exports.default = ButtonComponent;
