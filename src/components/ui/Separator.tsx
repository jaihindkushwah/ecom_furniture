import {View, Text} from 'react-native';
import React from 'react';

interface SeparatorProps extends React.ComponentProps<typeof View> {}
const Separator = React.forwardRef(
  ({style, children, ...props}: SeparatorProps, ref: React.Ref<View>) => {
    return (
      <View
        style={[
          {
            height: 7,
            marginTop: 10,
            width: '100%',
            backgroundColor: '#f5f5f5',
          },
          style,
        ]}
        ref={ref}
        {...props}>
        {children}
      </View>
    );
  },
);
export default Separator;
