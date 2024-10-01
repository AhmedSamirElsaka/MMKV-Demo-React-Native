/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

import {testStore} from './store/mmkv';
import {useMMKVBoolean, useMMKVNumber, useMMKVString} from 'react-native-mmkv';

function App(): React.JSX.Element {
  const [testText, setTestText] = useState(
    testStore.getString('user.name') || '',
  );

  testStore.set('user.name', 'Marc');
  testStore.set('user.age', 21);
  testStore.set('is-mmkv-fast-asf', true);

  const username: string = testStore.getString('user.name') || 'ahmed';
  const age = testStore.getNumber('user.age'); // 21
  const isMmkvFastAsf = testStore.getBoolean('is-mmkv-fast-asf'); // true

  const [usernameHook, setUsernameHook] = useMMKVString('user.name');
  const [ageHook, setAgeHook] = useMMKVNumber('user.age');
  const [isMmkvFastAsfHook, setIsMmkvFastAfHook] =
    useMMKVBoolean('is-mmkv-fast-asf');
  return (
    <View>
      <Text>{testText}</Text>
      <Button
        title="Test"
        onPress={() => {
          testStore.set('user.name', 'ahmed samir mohamed');
        }}
      />
    </View>
  );
}

export default App;
