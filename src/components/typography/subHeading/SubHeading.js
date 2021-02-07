import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
import subHeadingConfig from './subHeadingConfig';

const propTypes = {
  color: PropTypes.string,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  primitive: PropTypes.oneOf(['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node,
};

const defaultProps = {
  primitive: 'h3',
  large: false,
  medium: true,
  small: false,
};

const StyledSubHeading = styled(Text)`
  font-weight: ${subHeadingConfig.fontWeight};
`;

const SubHeading = (props) => {
  const { color, large, medium, small, children, ...rest } = props;

  let sizeConfig = {};

  if (medium) {
    sizeConfig = subHeadingConfig.medium;
  } else if (large) {
    sizeConfig = subHeadingConfig.large;
  } else if (small) {
    sizeConfig = subHeadingConfig.small;
  }

  return (
    <StyledSubHeading
      color={color}
      fontSize={sizeConfig.fontSize}
      lineHeight={sizeConfig.lineHeight}
      {...rest}
    >
      {children}
    </StyledSubHeading>
  );
};

SubHeading.propTypes = propTypes;
SubHeading.defaultProps = defaultProps;

export default SubHeading;
