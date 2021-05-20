<<<<<<< HEAD
# The Glew Mobile

Source code for The Glew Mobile App.

## SETTING UP

- Install the following dependencies:
  - [JAVA JDK](http://openjdk.java.net/install/)
  - [NodeJS](https://nodejs.org/es/download/)
  - [Android SDK](https://developer.android.com/studio)
  - [Yarn](https://yarnpkg.com/lang/en/docs/install)
- Clone this repository
- Execute `yarn` in a terminal

### INSTALLING JAVA SDK

Export `JAVA_PATH` and `JAVA_HOME` environment variables in your `./.profile` file by appending these lines:

```bash
export JAVA_PATH=/usr/lib/jvm/java-VERSION_NUMBER-oracle/bin/java
export JAVA_HOME=/usr/lib/jvm/java-VERSION_NUMBER-oracle
```

### INSTALLING NODE JS

In order to execute Javascript code outside web browsers, we need an execution environment such as [Node JS](https://nodejs.org/es/download/).

### INSTALLING ANDROID SDK

We will use [Android's software development kit](https://developer.android.com/studio/#downloads) in order to build React Native code into a format compatible with Android devices. To install it, follow the following steps:

1. Download Android SDK from [here](https://developer.android.com/studio/#downloads)
2. Extract the compressed files into `~/androidSDK/`.
3. Create an empty file named `repositories.cfg` at `~/.android/`.
4. Accept licenses by running `~/androidSDK/tools/bin/sdkmanager "platforms;android-29"`.
5. Install your build and platforms tools: `~/androidSDK/tools/bin/sdkmanager "build-tools;29.0.2"`, `~/androidSDK/tools/bin/sdkmanager "platform-tools"`
6. Define the SDK's location through environment variables by adding the following lines to your `~./.profile` file:

```bash
export ANDROID_HOME=/home/USER/androidSDK/
export PATH="${ANDROID_HOME}tools:${PATH}"
export PATH="${ANDROID_HOME}platform-tools:${PATH}"
export ANDROID_SDK=/home/USER/androidSDK/
```

### INSTALLING ANDROID NDK

[Android NDK](https://developer.android.com/ndk/downloads). For the build process, we will also need Android NDK.

1. Download it from [here](https://developer.android.com/ndk/downloads)
2. Extract the compressed folder into `~/androidNDK/`.
3. Set the corresponding environment variables by adding the following line to your `~./.profile` file:

```bash
# As far as Jan, 28 2021, r21d version is LST
export ANDROID_NDK=/home/USER/androidNDK/android-ndk-r21d
```

## RUNNING THE PROJECT

- Go to your React Native app folder and start metro bundler `react-native start`
- Connect your device via USB or Wi-Fi following these [instructions](https://reactnative.dev/docs/running-on-device).
- Deploy your app to your virtual device `react-native run-android`

## TROUBLESHOOTING

- If you find an error similar to `Error: spawn ./gradlew EACCES at Process.ChildProcess._handle.onexit (internal/child_process.js:267:19)`, check [this question](https://stackoverflow.com/questions/63046515/what-do-these-errors-mean-in-react-native-in-my-react-native-project-and-how-do) in Stack Overflow.
=======
# fastlane-test
>>>>>>> 0b3ffe87eb268bb81c70ccafcc0ce81fb9d270ad
# fastest2
