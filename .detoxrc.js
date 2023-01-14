module.exports = {
  testRunner: "jest",
  runnerConfig: "e2e/jest.config.js",
  configurations:{
    apps: {
      'android.emu.debug': {
        type: "android.apk",
        binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
        build: "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
      },
    },
    devices:{
      emulator: {
        type: 'android.emulator',
        device: {
          avdName: 'Pixel_3a_API_31',
        },
      },
    }
  }
  
};