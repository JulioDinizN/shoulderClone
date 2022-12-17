import {Text} from 'react-native';


/**
 * what could be a FUCKING AWESOME COMPONENT, must have:
 * - typing
 * - validation
 * - default style or PROPERTY that are optional
 * - documentation with all properties and describing the respoibility of the component
 * - tests (minimum render with validation of properties [defined/not null, etc])
 * - storybook with the component and its own states.
 * 
*/



// always add what kind of component it is in the begning of the proptype
// because can  be used in other components. e.g: organism
export type LocalizedTextProps = {
  textKey: string;
  interpolation?: Object;
  style?: Object;
};

/**
 * A component that returns JSX with the translation key resolved. Supports interporlation of dynamic keys.
 * @param textKey {string} e.g: textHomeScreenTitle 
 * @param {interpolation?} <string> dynamic key to be added to the component. 
 * e.g <LocalizedText textKey="homeScreenTitle" interpolation={myVariableToAddToText}>
 * @returns { Component } with the translation key resolved.
 * 
 */
export const LocalizedText = ({
  textKey,
  interpolation = {},
  style = {},
  ...rest
}: LocalizedTextProps) => {
 
  // if (!_.notDefined((textKey)) && object vazio e array vazio, tem q ser valido) {
  //   throw new Error("Missing textKey that must be of type = <string>")
  // }

  const textToShow = 'hello';

  return (
    <Text style={style} {...rest}>
      {textToShow}
    </Text>
  );
};


// default property here
