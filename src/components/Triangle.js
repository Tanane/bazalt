const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70,
      marginLeft: -50,
      width: 100
    },
};

function Triangle({text}) {
    return (
        <h4 style={styles.container}>
             {text}
        </h4>
      );
}

export default Triangle;
