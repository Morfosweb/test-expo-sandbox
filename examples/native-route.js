import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Router, Route } from '../src/config/router/packs';
import { useHistory } from '../src/useMorfos';

function Home() {
  return <Text style={styles.header}>Home</Text>;
}

function About() {
  return <Text style={styles.header}>About</Text>;
}

function Topic({ match }) {
  return <Text style={styles.topic}>{match.params.topicId}</Text>;
}

function Topics({ match }) {
  let history = useHistory();
  return (
    <View>
      <Text style={styles.header}>Topics</Text>
      <View>
        <TouchableOpacity
          onPress={() => history.push(`${match.url}/rendering`)}
          style={styles.subNavItem}
        >
          <Text>Rendering with React</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => history.push(`${match.url}/components`)}
          style={styles.subNavItem}
        >
          <Text>Components</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => history.push(`${match.url}/props-v-state`)}
          style={styles.subNavItem}
        >
          <Text>Props v. State</Text>
        </TouchableOpacity>
      </View>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <Text style={styles.topic}>Please select a topic.</Text>}
      />
    </View>
  );
}

function App2() {
  let history = useHistory();

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => history.push('/')}>
          <View style={styles.navItem}>
            <Text>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => history.push('/about')}
          style={styles.navItem}
        >
          <Text>About</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => history.push('/topics')}
          style={styles.navItem}
        >
          <Text>Topics</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: 'lightgray', height: 1 }} />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </View>
  );
}

function App() {
  return (
    <Router>
      <App2 />
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: 'center',
    fontSize: 15
  }
});

export default App;
