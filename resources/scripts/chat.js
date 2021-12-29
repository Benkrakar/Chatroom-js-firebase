class Chatroom{
  constructor(room,username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('users')
  }
  async addChat(message){
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    const response = await this.chats.add(chat)
    return response
  }
  getChats(callback){
    this.chats
    .where('room', '==', this.room)
    .orderBy('created_at')
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change =>{
        if(change.type === 'added'){
          callback(change.doc.data())
        }
      })
    })
  }
  updateName(username){
    this.username= username;
  }
  updateRoom(room){
    this.room= room;
    if(this.unsub){
      this.unsub()
    }
  }
}
