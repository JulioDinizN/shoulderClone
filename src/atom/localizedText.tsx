import {Text} from 'react-native';

type Props = {
  textKey: string;
  interpolation: Object;
  style: Object;
};

export const localizedText = ({
  textKey,
  interpolation = {},
  style = {},
  ...rest
}: Props) => {
  const textToShow = 'hello';

  return (
    <Text style={style} {...rest}>
      {textToShow}
    </Text>
  );
};
