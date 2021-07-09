import { StyleSheet } from 'react-native';
import ColorSet from '../../ColorSet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: ColorSet.white,
  },
  avatarWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    height: 300,
    width: 300,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  link: {
    color: ColorSet.blue,
  },
});

export default styles;
