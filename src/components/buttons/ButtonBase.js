import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  width: '150px',
  height: 'auto',
  onClick: () => {},
};

const ButtonComponent = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  text-align: center;
  color: ${({ textColor }) => textColor};
  border: 0;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  margin: 0;
`;

const ButtonBase = (props) => {
  return <ButtonComponent {...props} />;
};

ButtonBase.propTypes = propTypes;
ButtonBase.defaultProps = defaultProps;

export default ButtonBase;
