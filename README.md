# shoulderClone

shoulderClone - Is a React Native mobile app inspired by shoulder (an app by CoreBiz), made to be a technical challenge to the main cases of an ecommerce app.

The app was made with the intent of learning more about localization, infinite scrooling scrolling, Reduxtoolkit, thunks to make async calls and using Redux as a global
state management.

## Requirements: 
- Node installed
- Android Studio or Xcode

## Steps:
1. Clone the repository
2. cd shoulderClone
3. `npm install`
4. react-native run-android or react-native run-ios

## Troubleshotting:

### 1. Unable to run react-native run-android, gradle error: 
- Create a emulator using Android version Pie (9.0)
- Make sure you have the Module pointing to SDK 28; steps:
   - right click the App directory
   - choose the "module setting" option
   - change the ADK Platform as what you need
   - Click Apply

### 2. Emulator not found:
- You can create going to Android Studio -> Tools -> Virtual Device Manager
