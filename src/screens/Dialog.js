import React, {useState} from 'react';
import Dialog from 'react-native-dialog';
import {Button, StyleSheet, View} from 'react-native';

const DialogScreen = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  return (
    <View style={styles.dialogStyle}>
      <Button title="Open dialog" onPress={showDialog} />
      <Dialog.Container visible={visible}>
        <Dialog.Title style={{fontSize: 22, fontWeight: 'bold'}}>
          Account delete
        </Dialog.Title>
        <Dialog.Description style={{fontSize: 20}}>
          Do you really want to delete this account?
        </Dialog.Description>
        <Dialog.Button
          style={{color: 'black', fontSize: 20}}
          label="cancel"
          onPress={hideDialog}
        />
        <Dialog.Button
          style={{fontSize: 20}}
          label="delete"
          onPress={hideDialog}
        />
      </Dialog.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  dialogStyle: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DialogScreen;
