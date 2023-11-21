declare module 'ButtonComponent' {
    interface ButtonComponentProps {
        options: {
            clientId: string;
            buttonScriptUri?: string;
        };
    }

    const ButtonComponent: React.FC<ButtonComponentProps>;

    export default ButtonComponent;
}