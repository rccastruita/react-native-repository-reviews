import { View, StyleSheet, Image } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  summaryContainer: {
    //padding: 12,
    
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  summary: {
    //paddingLeft: 15,
    paddingHorizontal: 18,

    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    flex: 1,
  },
  description: {
    color: theme.colors.textSecondary,
    flexWrap: 'wrap',
    flex: 1,
    marginTop: 5,
    //fontSize: theme.fontSizes.subheading,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 6,
    borderRadius: 6,
    marginTop: 10,
  },

  statsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statsItem: {
    
  },
  statsValue: {
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
  statsTitle: {
    color: theme.colors.textSecondary,
  }
});

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.container}>
      <ItemSummary item={item} />
      <ItemStats item={item} />
    </View>
  );
};

const ItemSummary = ({item}) => {
  return (
    <View style={styles.summaryContainer}>
      <Image
        style={styles.image}
        source={{
          uri: item.ownerAvatarUrl,
        }}
      />
      <View style={styles.summary}>
        <Text style={styles.name}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
  )
};

const ItemStats = ({item}) => {
  const titles = Array('Stars', 'Forks', 'Reviews', 'Rating');
  const values = Array(
    item.stargazersCount,
    item.forksCount,
    item.reviewCount,
    item.ratingAverage
  );

  let stats = [];
  
  for(let i=0; i<4; i++) {
    stats.push({
      title: titles[i],
      value: values[i] < 1000
        ? values[i]
        : (Math.round(values[i] / 100) / 10).toString() + 'k'
    });
  }

  return (
    <View style={styles.statsContainer}>
      {stats.map(i => 
        <View key={item.id + i.title} style={styles.statsItem}>
          <Text style={styles.statsValue}>{i.value}</Text>
          <Text style={styles.statsTitle}>{i.title}</Text>
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;