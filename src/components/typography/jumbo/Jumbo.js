import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
import jumboConfig from './jumboConfig';

const propTypes = {
  color: PropTypes.string,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  primitive: PropTypes.oneOf(['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node,
};

const defaultProps = {
  primitive: 'h1',
  large: false,
  medium: true,
  small: false,
};

const StyledJumbo = styled(Text)`
  font-weight: ${jumboConfig.fontWeight};
`;

const Jumbo = (props) => {
  const { color, large, medium, small, children, ...rest } = props;

  let sizeConfig = {};

  if (medium) {
    sizeConfig = jumboConfig.medium;
  } else if (large) {
    sizeConfig = jumboConfig.large;
  } else if (small) {
    sizeConfig = jumboConfig.small;
  }

  return (
    <StyledJumbo
      color={color}
      fontSize={sizeConfig.fontSize}
      lineHeight={sizeConfig.lineHeight}
      {...rest}
    >
      {children}
    </StyledJumbo>
  );
};

Jumbo.propTypes = propTypes;
Jumbo.defaultProps = defaultProps;

export default Jumbo;
