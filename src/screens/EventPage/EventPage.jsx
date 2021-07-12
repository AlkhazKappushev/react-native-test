import React, { memo } from 'react';
import propTypes from 'prop-types';
import {
  ScrollView,
  Image,
  View,
  Text,
  Linking,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './EventPageStyles';

const EventPage = ({ route }) => {
  const { eventId } = route.params;

  const currentEvent = useSelector(
    (state) => state.eventsReducer.events.find((item) => item.id === eventId),
  );

  const onPress = (urlAdress) => {
    Linking.openURL(urlAdress);
  };

  return (
    <View style={styles.container}>
      {currentEvent && (
        <ScrollView>
          <View>
            <Text style={styles.title}>{currentEvent.type}</Text>
            <Text>
              id:
              {currentEvent.id}
            </Text>
            <Text>
              public:
              {currentEvent.public}
            </Text>
            <Text>
              created_at:
              {currentEvent.created_at}
            </Text>
          </View>

          <View>
            <Text style={styles.title}>actor</Text>
            <View style={styles.avatarWrapper}>
              <Image source={{ uri: currentEvent.actor.avatar_url }} style={styles.avatar} />
            </View>
            <Text>
              id:
              {' '}
              {currentEvent.actor.id}
            </Text>
            <Text>
              login:
              {' '}
              {currentEvent.actor.login}
            </Text>
            <Text>
              display_login:
              {' '}
              {currentEvent.actor.display_login}
            </Text>
            <Text style={styles.link} onPress={() => onPress(currentEvent.actor.url)}>
              url:
              {' '}
              {currentEvent.actor.url}
            </Text>
          </View>

          <View>
            <Text style={styles.title}>repo</Text>
            <Text>
              id:
              {' '}
              {currentEvent.repo.id}
            </Text>
            <Text>
              name:
              {' '}
              {currentEvent.repo.name}
            </Text>
            <Text style={styles.link} onPress={() => onPress(currentEvent.repo.url)}>
              url:
              {' '}
              {currentEvent.repo.url}
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

EventPage.propTypes = {
  route: propTypes.shape({
    params: propTypes.shape({
      eventId: propTypes.string.isRequired,
    }),
  }).isRequired,
};

export default memo(EventPage);
