/**
 *
 * @flow strict-local
 * @format
 */

import type {Node} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import React from 'react';
import {LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

const ReloadInstructions: () => Node = Platform.select({
  ios: () => (
    <>
      <Text>
        Press <Text style={styles.highlight}>Cmd + R</Text> in the simulator to
        reload your app's code.
      </Text>
      <LearnMoreLinks />
    </>
  ),
  default: () => (
    <>
      <Text>
        Double tap <Text style={styles.highlight}>R</Text> on your keyboard to
        reload your app's code.
      </Text>
      <LearnMoreLinks />
    </>
  ),
});

export default ReloadInstructions;
