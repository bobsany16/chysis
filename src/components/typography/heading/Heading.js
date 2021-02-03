import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
import headingConfig from './headingConfig';

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
  medium: false,
  small: true,
};

const StyledText = styled(Text)`
  font-weight: ${headingConfig.fontWeight};
`;

const Heading = (props) => {
  const { color, large, small, medium, children, primitive, ...rest } = props;

  let sizeConfig = {};

  //TODO: add headingConfig object
  if (medium) {
    sizeConfig = headingConfig.medium;
  } else if (large) {
    sizeConfig = headingConfig.large;
  } else if (small) {
    sizeConfig = headingConfig.small;
  }

  return (
    <StyledText
      color={color}
      fontSize={sizeConfig.fontSize}
      lineHeight={sizeConfig.lineHeight}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
