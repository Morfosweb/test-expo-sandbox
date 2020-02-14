import * as React from 'react';
// import * as Font from 'expo-font';
import { Ionicons, createIconSet } from '@expo/vector-icons';

// const glyphMap = { 'icon-name': 1234, test: '∆' };
const glyphMap = { 'icon-test': 'ROA' };
const expoAssetId = require('../assets/fonts/OpenSans-Bold.ttf');
const CustomIcon = createIconSet(glyphMap, 'OpenSans-Bold', expoAssetId);

let IconExample0 = () => <div>teste</div>;

let IconExample1 = () => (
  <Ionicons name="md-checkmark-circle" size={32} color="green" />
);

let IconExample2 = () => <CustomIcon name="icon-test" size={32} color="red" />;

export default () => <IconExample1 />;
