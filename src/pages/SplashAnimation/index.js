import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from 'lottie-react-native';

const SplashAnimation = ({ navigation }) => {
    useEffect(() => {
        // Navigate to main app screen after animation completes or after a certain duration
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 3000); // Adjust duration as needed (e.g., 3000 milliseconds = 3 seconds)

        // Clear the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <LottieView 
                source={require('../../assets/home-animation.json')}
                autoPlay
                loop={true} // No need to loop if it's a splash screen
                onAnimationFinish={() => {
                    navigation.navigate('Home');
                }}
                style={styles.animation}
            />
            <Text style={styles.text}>Welcome to Our Homepage!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: 200, // Adjust width as needed
        height: 200, // Adjust height as needed
    },
    text: {
        fontSize: 20,
        marginTop: 20,
    }
});

export default SplashAnimation;