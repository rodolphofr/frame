class MessageView extends View {

    template(messageModel) {
        return `<p class="alert alert-info">${messageModel.text}</p>`;
    }
}