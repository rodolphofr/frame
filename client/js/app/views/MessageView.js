class MessageView extends View {

    template(messageModel) {
        let text = messageModel.text;
        return text ? `<p class="alert alert-info">${text}</p>` : '';
    }
}