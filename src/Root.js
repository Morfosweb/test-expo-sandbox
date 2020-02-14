import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { View, TouchableOpacity, Text } from 'react-native';
import { Grad, Icons, Share, NRoute } from '../examples';
import { useHistory } from './useMorfos';

function BasicExample() {
  let history = useHistory();

  let gotoGrad = () => history.push('/');
  let gotoIcons = () => history.push('/icons');
  let gotoShare = () => history.push('/share-img');
  let gotoNRoute = () => history.push('/native-route');

  return (
    <View style={{ backgroundColor: '#f2f2f2' }}>
      <View>
        <TouchableOpacity onPress={gotoGrad}>
          <Text>Gradient 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoIcons}>
          <Text>Icons</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoShare}>
          <Text>Share Imgs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoNRoute}>
          <Text>Native Route</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: 'lightgray', height: 1 }} />

      <Switch>
        <View style={{ backgroundColor: 'white' }}>
          <Route exact path="/" component={Grad} />
          <Route path="/icons" component={Icons} />
          <Route path="/share-img" component={Share} />
          <Route path="/native-route" component={NRoute} />
        </View>
      </Switch>
    </View>
  );
}

export default () => (
  <Router>
    <BasicExample />
  </Router>
);
