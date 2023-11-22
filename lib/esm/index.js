import React from 'react';
var ButtonComponent = function (_a) {
    var options = _a.options;
    React.useEffect(function () {
        var _a;
        var script = document.createElement('script');
        script.src = (_a = options.buttonScriptUri) !== null && _a !== void 0 ? _a : "https://install.idpartner.com/button.js";
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, [options.clientId]);
    var customHTML = "<id-partner id=\"".concat(options.clientId, "\" />");
    return (React.createElement("div", { dangerouslySetInnerHTML: { __html: customHTML } }));
};
export default ButtonComponent;
