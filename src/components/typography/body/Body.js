import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
import bodyConfig from './bodyConfig';

const propTypes = {
  color: PropTypes.string,
  extraLarge: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  extraSmall: PropTypes.bool,
  primitive: PropTypes.oneOf(['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node,
};

const defaultProps = {
  primitive: 'p',
  extraLarge: false,
  large: false,
  medium: false,
  small: true,
  extraSmall: false,
};

const StyledBody = styled(Text)`
  font-weight: ${bodyConfig.fontWeight};
`;

const Body = (props) => {
  const { color, extraLarge, large, medium, small, extraSmall, children, ...rest } = props;

  let sizeConfig = {};

  if (extraLarge) {
    sizeConfig = bodyConfig.extraLarge;
  } else if (large) {
    sizeConfig = bodyConfig.large;
  } else if (medium) {
    sizeConfig = bodyConfig.medium;
  } else if (small) {
    sizeConfig = bodyConfig.small;
  } else if (extraSmall) {
    sizeConfig = bodyConfig.extraSmall;
  }

  return (
    <StyledBody
      color={color}
      fontSize={sizeConfig.fontSize}
      lineHeight={sizeConfig.lineHeight}
      {...rest}
    >
      {children}
    </StyledBody>
  );
};

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default Body;
