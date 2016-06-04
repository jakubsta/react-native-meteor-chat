Chat - React Native with Meteor
===============================

Requirements:

- node 5+
- `curl https://install.meteor.com/ | sh`
- `npm i -g react-native-cli`

Install dependencies:

1. `cd meteor; npm install`
2. `cd chat; npm install`


Steps to run the app:
1. `cd meteor; meteor`
2. `open chat/ios/chat.xcodeproj` and run project in Xcode

If you want to run app on your phone, change ios config file `chat/ios/chat/AppDelegate.m`:

    jsCodeLocation = [NSURL URLWithString:@"http://<YOUR_IP_ADDRESS>:8081/index.ios.bundle?platform=ios&dev=true"];
    
and path for meteor server `chat/components/connect.js`:

    Meteor.connect('ws://<YOUR_IP_ADDRESS>:3000/websocket');

    