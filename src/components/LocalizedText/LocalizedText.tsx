import {Text} from 'react-native';
import {translate} from '../../localization/services';

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
 * @param {string} textKey e.g: textHomeScreenTitle
 * @param {string=} interpolation  dynamic key to be added to the component.
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
  return (
    <Text style={style} {...rest}>
      {translate(textKey, interpolation)}
    </Text>
  );
};
