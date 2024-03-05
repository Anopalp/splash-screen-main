import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from 'lottie-react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <LottieView 
                source={require('../../assets/maintenance.json')}
                autoPlay
                loop
                style={styles.animation}
            />
            <Text style={styles.text}>Under Maintenance</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: 200, 
        height: 200, 
    },
    text: {
        fontSize: 20,
        marginTop: 20,
    }
});

export default Home;