import React from 'react';
interface ButtonComponentProps {
    options: {
        clientId: string;
        buttonScriptUri?: string;
    };
}
declare const ButtonComponent: React.FC<ButtonComponentProps>;
export default ButtonComponent;
