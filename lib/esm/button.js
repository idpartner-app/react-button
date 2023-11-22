import React, { useEffect } from 'react';
var ButtonComponent = function (_a) {
    var options = _a.options;
    useEffect(function () {
        var script = document.createElement('script');
        script.src = "https://install.idpartner.com/button.js";
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, [options.clientId]);
    var customHTML = "<id-partner id=\"".concat(options.clientId, "\" />");
    return (React.createElement("div", null,
        React.createElement("div", { dangerouslySetInnerHTML: { __html: customHTML } })));
};
export default ButtonComponent;
