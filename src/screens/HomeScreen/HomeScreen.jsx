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

import { getEventsAction, setCurrentEventAction } from '../../redux/actions';
import { navigate } from '../../Route';

import styles from './HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventsAction());
    let interval;
    const unsubscribeFocus = navigation.addListener('focus', () => {
      interval = setInterval(() => {
        dispatch(getEventsAction());
      }, 60000);
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      clearInterval(interval);
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, []);

  const onPress = (id) => {
    dispatch(setCurrentEventAction(id));
    navigate('EventPage', { eventId: id });
  };

  const events = useSelector((state) => state.eventsReducer.events);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          EventList
        </Text>
        <TouchableOpacity onPress={() => dispatch(getEventsAction())}>
          <AntDesign name="reload1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.list}>
        {Boolean(events.length) && events.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.list__elem}
            onPress={() => onPress(item.id)}
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
  }).isRequired,
};

export default memo(HomeScreen);
