import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import MyButton from './MyButton';
import {dislikeAll, likeAll, resetAll} from '../store/actions/index';

function TopRowBtn(props) {
  const {onLikeAll, onDislikeAll, onResetAll} = props;
  return (
    <View style={styles.container}>
      <MyButton onPress={onLikeAll} style={styles.blueBtn}>
        <Text>Like All</Text>
      </MyButton>
      <View style={styles.centerMargin}>
        <MyButton
          onPress={onResetAll}
          style={styles.whiteBtn}
          textStyle={styles.textBlack}>
          <Text>Reset All</Text>
        </MyButton>
      </View>
      <MyButton onPress={onDislikeAll} style={styles.redBtn}>
        <Text>Dislike All</Text>
      </MyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  blueBtn: {
    backgroundColor: '#2B72C4',
  },
  whiteBtn: {
    backgroundColor: '#ffffff',
  },
  redBtn: {
    backgroundColor: '#DB2C2C',
  },
  centerMargin: {marginHorizontal: 55},
  textBlack: {color: '#383737'},
});

const mapDispatchToProps = dispatch => {
  return {
    onLikeAll: () => {
      dispatch(likeAll());
    },
    onDislikeAll: () => {
      dispatch(dislikeAll());
    },
    onResetAll: () => {
      dispatch(resetAll());
    },
  };
};

export default connect(null, mapDispatchToProps)(TopRowBtn);
