interface IMessageService
{
    getMessage: () => string;

}

const MessageService: IMessageService =
{
    getMessage() {
        return 'Hola Mundo';
    },
}

export default MessageService;