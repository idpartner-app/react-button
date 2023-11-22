"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ButtonComponent = function (_a) {
    var options = _a.options;
    (0, react_1.useEffect)(function () {
        var script = document.createElement('script');
        script.src = "https://install.idpartner.com/button.js";
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, [options.clientId]);
    var customHTML = "<id-partner id=\"".concat(options.clientId, "\" />");
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: customHTML } })));
};
exports.default = ButtonComponent;
