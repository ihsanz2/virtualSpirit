import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import MyButton from './MyButton';
import {connect} from 'react-redux';
import {like, dislike} from '../store/actions/index';

function PostScrollView(props) {
  const {onIncrementClick, likeProps, onDecrementClick} = props;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollviewStyle}>
      <View>
        {likeProps.map(item => (
          <View key={item.id}>
            {item.image ? (
              <View style={styles.mainContainer}>
                <Image
                  source={item.image}
                  style={styles.imageContainer}
                  resizeMethod={'auto'}
                  resizeMode={'cover'}
                />
                <View style={styles.content}>
                  <View style={styles.leftBtn}>
                    <MyButton
                      disabled={true}
                      style={styles.whiteBtn}
                      textStyle={styles.textBlack}>
                      <Text>{item.like} Like</Text>
                    </MyButton>
                  </View>
                  <View style={styles.bottomRow}>
                    <MyButton
                      onPress={() => onIncrementClick(item.id, 'add')}
                      style={styles.blueBtn}>
                      <Text>Like</Text>
                    </MyButton>
                    <View style={styles.separator} />
                    <MyButton
                      onPress={() => onDecrementClick(item.id, 'subtract')}
                      style={styles.redBtn}>
                      <Text>Dislike</Text>
                    </MyButton>
                  </View>
                </View>
              </View>
            ) : null}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 11,
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  content: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 21,
    marginVertical: 10,
  },
  bottomRow: {
    width: '45%',
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    height: 198,
    width: 352,
  },
  leftBtn: {
    width: '40%',
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
  separator: {
    width: 20,
  },
  textBlack: {color: '#383737'},
});

const mapStateToProps = state => {
  return {
    likeProps: state.postReducer.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: (id, action) => {
      dispatch(like(id, action));
    },
    onDecrementClick: (id, action) => {
      dispatch(dislike(id, action));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScrollView);
