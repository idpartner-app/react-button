import React from 'react';

interface ButtonComponentProps {
    options: {
        clientId: string;
    };
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ options }) => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://install.idpartner.com/button.js`;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [options.clientId]);

    const customHTML = `<id-partner id="${options.clientId}" />`;

    return (
        <div dangerouslySetInnerHTML={{ __html: customHTML }} />
    );
};

export default ButtonComponent;
