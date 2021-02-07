import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fonts from './fonts/index';

const propTypes = {
    primitive: PropTypes.oneOf(['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    children: PropTypes.node,
  },
  defaultProps = {
    primitive: 'span',
  };

const TextWrapper = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  font-family: ${Fonts.Rubik};
  margin: 0;
`;

const Text = (props) => {
  const { primitive, children, ...rest } = props;

  return (
    <TextWrapper as={primitive} {...rest}>
      {children}
    </TextWrapper>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
