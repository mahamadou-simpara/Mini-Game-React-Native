import { Pressable, StyleSheet, Text, View } from 'react-native';

function PrimaryButton({children}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={() => {console.log('Hello!');}}>
        <Text style={styles.textElement}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;




const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'yellow',
        overflow: 'hidden',
        marginVertical: 5,
        borderRadius: 10,
    },
    textElement: {
        textAlign: 'center',
        color: 'white'
    }
})