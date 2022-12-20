import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {LocalizedText} from '../../design-system/atom';
import {
  resources,
  changeLanguage,
  currentLanguage,
} from '../../localization/services';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import { setAppLanguage } from '../../redux/reducers/language/languageReducer';

export function SettingsScreen() {
  const myLanguage = useAppSelector(state => state.language);
  const dispatch = useAppDispatch()

  const handleLanguage = (language: string) => () => {
    dispatch(setAppLanguage(language))
    changeLanguage(language);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LocalizedText textKey={'paginationEnd'} style={{fontSize: 16}} />
      {Object.keys(resources).map(item => (
        <View key={item}>
          <TouchableOpacity
            style={home.itemStyle}
            onPress={handleLanguage(item)}>
            <LocalizedText
              textKey={`languages.${item}`}
              style={{fontSize: 16}}
            />
            {myLanguage === item ? (
              <Text style={{marginLeft: 30}}>√</Text>
            ) : null}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const home = StyleSheet.create({
  languageSettings: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  itemStyle: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  counter: {
    fontSize: 12,
    textAlign: 'center',
  },
  blueBox: {
    padding: 30,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    backgroundColor: '#c4e6ff',
  },
  redBox: {
    padding: 30,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 30,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    backgroundColor: '#c4e6ff',
  },
});
