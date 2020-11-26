import React from 'react';
import { Text } from 'react-native';

class ErrorBoundaryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Text> Something went wrong </Text>;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryClass;
