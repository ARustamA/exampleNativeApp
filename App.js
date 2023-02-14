import * as Font from 'expo-font';
import { useCallback, useEffect, useRef, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import Main from "./components/Main";
import Lottie from 'lottie-react-native';
import { Animated, Easing } from 'react-native';



export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const animationProgress = useRef(new Animated.Value(0))
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'mt-bold': require('./assets/font/Montserrat-Bold.ttf'),
          // 'mt-light': require('./assets/font/Montserrat-Light.ttf')
        })
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.preventAutoHideAsync();
    }
  }, [appIsReady]);
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])

  if (!appIsReady) {
    return (
      <Lottie
        source={require('./assets/4-dot-loader.json')}
        progress={animationProgress.current}
        autoPlay
      />
    );
  }

  return (
    <Main onLayout={onLayoutRootView} />
  )
}