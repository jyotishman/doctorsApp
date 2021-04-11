import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function AddDoctor() {
  const [isDropdownVisible, setisDropdownVisible] = useState(false);
  const [isSpecialityVisible, setSpecialityVisible] = useState(false);

  const [speciality, setSpeciality] = useState('');
  return (
    <View style={{backgroundColor: 'blue', padding: 20}}>
      <TextInput
        style={{backgroundColor: '#fff', marginBottom: 5}}
        placeholder="First Name"
      />
      <TextInput
        style={{backgroundColor: '#fff', marginBottom: 5}}
        placeholder="Last Name"
      />
      <TouchableOpacity
        style={{backgroundColor: '#fff', padding: 15}}
        onPress={() => setisDropdownVisible(!isDropdownVisible)}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{textTransform: 'capitalize'}}>
            {speciality || 'Select Speciality'}
          </Text>
          <Text>Select </Text>
        </View>
      </TouchableOpacity>

      {isDropdownVisible ? (
        <View style={{backgroundColor: '#fff', padding: 10}}>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => {
              setSpeciality('cardiologist');
              setisDropdownVisible(false);
            }}>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => {
              setSpeciality('Urologist');
              setisDropdownVisible(false);
            }}>
            <Text>Urologist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => {
              setSpeciality('cardiologist');
              setisDropdownVisible(false);
            }}>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => {
              setSpeciality('cardiologist');
              setisDropdownVisible(false);
            }}>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => {
              setSpeciality('cardiologist');
              setisDropdownVisible(false);
            }}>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => {
              setSpeciality('cardiologist');
              setisDropdownVisible(false);
            }}>
            <Text>Cardiologist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSpecialityVisible(true);
              setisDropdownVisible(false);
            }}>
            <Text>Add new speciality</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {isSpecialityVisible ? (
        <View
          style={{alignItems: 'center', justifyContent: 'center', padding: 20}}>
          <View
            style={{
              backgroundColor: '#ddd',
              width: '100%',
              top: '20%',
              borderRadius: 12,
              padding: 10,
              zIndex: 99,
            }}>
            <Text style={{textAlign: 'center'}}>
              Add Speciality & credentials
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <TextInput
                placeholder="Add Speciality"
                style={{
                  backgroundColor: '#fff',
                  width: '50%',
                  marginRight: 10,
                }}></TextInput>
              <TextInput
                placeholder="Add Credentials"
                style={{backgroundColor: '#fff', width: '50%'}}></TextInput>
            </View>
            <TouchableOpacity
              onPress={() => setSpecialityVisible(false)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  color: 'blue',
                  width: 50,
                  padding: 10,
                }}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
}
