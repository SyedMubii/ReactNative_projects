const TodoListItem = ({textValue, id, checked, onRemove}) => {
    return (
      <View style={styles.container}>
          ...
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={onRemove(id)}>
            <Icon name="delete" size={30} color="#e33057" />
          </Text>
        </TouchableOpacity>
      </View>
    );
  };