import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function AddDoctor() {
  const [isDropdownVisible, setisDropdownVisible] = useState(false);
  const [speciality, setSpeciality] = useState('');
  return (
    <View style={{backgroundColor: '#fff', padding: 20}}>
      <TextInput placeholder="First Name" />
      <TextInput placeholder="Last Name" />
      <TouchableOpacity
        onPress={() => setisDropdownVisible(!isDropdownVisible)}>
        <Text>Speciality</Text>
      </TouchableOpacity>

      {isDropdownVisible ? (
        <View>
          <TouchableOpacity
            onPress={() => {
              setSpeciality('cardiologist');
              setisDropdownVisible(false);
            }}>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
