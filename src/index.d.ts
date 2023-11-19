declare module 'ButtonComponent' {
    interface ButtonComponentProps {
        options: {
            clientId: string;
        };
    }

    const ButtonComponent: React.FC<ButtonComponentProps>;

    export default ButtonComponent;
}