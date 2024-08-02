import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen () {
    return <View style={styles.container}>
        <TextInput style={styles.inputElement}/>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
}

export default StartGameScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        marginTop: 60,
        marginHorizontal: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 20
    },
    inputElement: {
        borderColor: 'white',
        borderBottomColor: 'yellow',
    }
})