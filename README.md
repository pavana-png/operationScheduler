## 🔥 Firebase Integration

This project uses [Firebase](https://firebase.google.com/) for:

- **Authentication**: To handle role-based login (Admin & Doctor)
- **Firestore**: As a NoSQL database for storing:
  - User data
  - Doctor/patient info
  - Surgery schedules
  - Post-op reports
  - Activity logs

### 🔒 Firebase Security Rules
Role-based rules were implemented in Firestore to restrict:
- Admin: Full access (read/write) to all collections
- Doctor: Limited access to view surgeries, upload reports
- Users: Can only access their own data

Security is enforced using Firestore’s built-in rules + UID-based verification.

## 🌐 Live Demo
[Click here to view the live site](https://operationscheduler.netlify.app)

