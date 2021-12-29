const chatList = document.querySelector(".chat-list");
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("Gaming", "walid");
chatroom.getChats((data) => {
  chatUI.render(data);
});
