function logAction(action, details = "") {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
  
    if (user) {
      db.collection("logs").add({
        userId: user.uid,
        action: action,
        details: details,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(err => console.error("Log Error:", err));
    }
  }
  