import React, { memo, useEffect } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

import { refreshPollingAction, startPollingAction, stopPollingAction } from '../../redux/actions';

import styles from './HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startPollingAction());

    const unsubscribeFocus = navigation.addListener('focus', () => {
      dispatch(startPollingAction());
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      dispatch(stopPollingAction());
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, []);

  const onPress = () => {
    dispatch(refreshPollingAction());
  };

  const events = useSelector((state) => state.eventsReducer.events);
  const updateButtonActive = useSelector((state) => state.eventsReducer.updateButtonActive);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          EventList
        </Text>
        {updateButtonActive && (
          <TouchableOpacity onPress={onPress}>
            <AntDesign name="reload1" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView style={styles.list}>
        {Boolean(events.length) && events.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.list__elem}
            onPress={() => navigation.navigate('EventPage', { eventId: item.id })}
          >
            <Text style={styles.list__text}>{item.type}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: propTypes.shape({
    addListener: propTypes.func.isRequired,
    navigate: propTypes.func.isRequired,
  }).isRequired,
};

export default memo(HomeScreen);
