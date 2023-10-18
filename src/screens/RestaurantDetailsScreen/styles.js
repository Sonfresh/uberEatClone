import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1,
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 10,
    },
    container: {
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
    },
    menuTitle: {
        marginTop: 15,
        paddingTop: 15,
        fontSize: 18,
        letterSpacing: 0.7,
        borderTopColor: "lightgray",
        borderTopWidth: 1,
    },
    subTitle: {
        fontSize: 15,
        color: 'grey',
    },
});