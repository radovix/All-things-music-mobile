import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/**
 * Class represents the filter container.
 *
 * @class Filter
 * @extends {React.Component}
 */
class Filter extends React.Component {
  /**
   * Creates an instance of Filter.
   *
   * @memberof Filter
   */
  constructor() {
    super();

    this.state = {
      isOpened: false
    };

    this.onArrowPress = this.onArrowPress.bind(this);
  }

  /**
   * Container's state.
   */
  state;

  /**
   * Handles the press on the arrow.
   *
   * @memberof Filter
   */
  onArrowPress() {
    this.setState(oldState => ({
      isOpened: !oldState.isOpened
    }));
  }

  /**
   * Renders the dropdown arrow.
   *
   * @returns arrow elemens
   * @memberof Filter
   */
  renderArrow() {
    if (this.state.isOpened) {
      return ( 
        <Icon name='arrow-drop-up' size={40} />
      );
    }

    return ( 
      <Icon name='arrow-drop-down' size={40} />
    );
  }

  /**
   * Renders the additional filter fields.
   *
   * @returns additional filter field's elements
   * @memberof Filter
   */
  renderAdditionalFields() {
    const { 
      children,
      onClear,
      onApply
    } = this.props;

    if (children && this.state.isOpened) {
      return (
        <View style={styles.additionalFields}>
          {children}
          <View style={styles.buttonsSection}>
            <View style={styles.button}>
              <Button
                style={styles.button}
                title='Clear'
                color='#f42909'
                onPress={onClear}
              />
            </View>
            <View style={styles.button}>
              <Button
                style={styles.button}
                title='Apply'
                color='#0cb23e'
                onPress={onApply}
              />
            </View>
          </View>
        </View>
      );        
    }

    return null;
  }

  /**
   * Renders the container.
   *
   * @returns container's elements
   * @memberof Filter
   */
  render() {
    const { 
      topElementPlaceholder,
      topElementValue,
      topElementOnChange,
      onApply
    } = this.props;

    const topElementOnBlur = this.state.isOpened ? () => {} : onApply;

    const topElement = (
      <TextInput 
        style={styles.topElement}
        placeholder={topElementPlaceholder}
        maxLength={30}
        value={topElementValue}
        onChangeText={topElementOnChange}
        onBlur={topElementOnBlur}
      />
    );

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {topElement}
          <TouchableOpacity
            style={styles.arrowContainer}
            activeOpacity={0.6}
            onPress={this.onArrowPress}
          >
            <View style={styles.arrow}>
              {this.renderArrow()}
            </View>
          </TouchableOpacity>
        </View>
        {this.renderAdditionalFields()}
      </View> 
    );
  }
}

/**
 * Container's styles object.
 */
const styles = StyleSheet.create({
  container: { 
    flexDirection: 'column'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    borderBottomWidth: 0.3333, 
    borderBottomColor: 'rgba(0, 0, 0, .3)'
  },
  topElement: {
    flex: 4,
    fontSize: 16
  },
  arrowContainer: {
    flex: 1
  },
  arrow: {
    alignSelf: 'flex-end',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  additionalFields: {
    position: 'absolute',
    top: 51,
    right: 0,
    left: 0,
    height: 225,
    zIndex: 100,
    paddingTop: 10,
    paddingLeft: 10,
    borderBottomWidth: 0.3333, 
    borderBottomColor: 'rgba(0, 0, 0, .3)',
    backgroundColor: 'white'
  },
  buttonsSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
  button: {
    width: 75,
    marginRight: 10
  }
});

export default Filter;
