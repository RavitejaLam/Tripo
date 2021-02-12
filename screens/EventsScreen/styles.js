import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "#DCDCDC",
    },
    eventList: {
        marginTop: 5,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 32,
        marginHorizontal: 20,
    },
    eventBox: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
    },
    eventDate: {
        flexDirection: 'column',
    },
    eventDay: {
        fontSize: 50,
        color: "#0099FF",
        fontWeight: "600",
    },
    headerBar: {
        margin: 10,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },
    eventMonth: {
        fontSize: 16,
        color: "#0099FF",
        fontWeight: "600",
    },
    eventContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10
    },
    description: {
        fontSize: 15,
        color: "#646464",
    },
    eventTime: {
        fontSize: 18,
        color: "#151515",
    },
    userName: {
        fontSize: 16,
        color: "#151515",
    },
});

export default styles;
