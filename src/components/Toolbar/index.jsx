import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({
  onAdd, onRemove, onEdit, hasSelectedItems,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Create board</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onRemove}
      disabled={!hasSelectedItems}
    >
      <Text style={[styles.toolbarActionText, hasSelectedItems ? {} : {
        color: 'rgba(155, 155, 155, 0.5)',
      }]}
      >
        Delete board
      </Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onEdit}>
      <Text style={styles.toolbarActionText}>Edit board</Text>
    </TouchableHighlight>
  </View>
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  hasSelectedItems: PropTypes.bool.isRequired,
};

export default Toolbar;
