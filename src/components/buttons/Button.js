import React from 'react';
import PropTypes from 'prop-types';
import ButtonPrimary from './ButtonPrimary';

const propTypes = {
  type: PropTypes.oneOf(['primary']),
  children: PropTypes.node,
};
const defaultProps = {
  type: 'primary',
};

const Button = (props) => {
  const { type, children, ...rest } = props;

  const _renderButton = () => {
    let Component;
    switch (type) {
      case 'primary':
      default:
        Component = ButtonPrimary;
        break;
    }
    return <Component {...rest} />;
  };

  return _renderButton();
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
