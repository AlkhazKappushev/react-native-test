import { StyleSheet } from 'react-native';

import ColorSet from '../../ColorSet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  list__elem: {
    borderBottomWidth: 1,
    borderColor: ColorSet.grey,
    paddingVertical: 5,
  },
  list__text: {
    fontSize: 25,
    paddingLeft: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default styles;
