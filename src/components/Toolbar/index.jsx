import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({
  onAdd, onRemove, onEdit, hasSelectedItems,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Create</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onRemove}
      disabled={hasSelectedItems.length < 1}
    >
      <Text style={[styles.toolbarInactiveActionText, hasSelectedItems < 1 ? {} : {
        color: '#fff',
      }]}
      >
        Delete
      </Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onEdit}
      disabled={hasSelectedItems.length !== 1}
    >
      <Text style={[styles.toolbarInactiveActionText, hasSelectedItems.length !== 1 ? {} : {
        color: '#fff',
      }]}
      >
        Edit
      </Text>
    </TouchableHighlight>
  </View>
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  hasSelectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Toolbar;
