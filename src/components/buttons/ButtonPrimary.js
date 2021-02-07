import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonBase from './ButtonBase';
import { subHeadingConfig, Fonts } from '../typography';

const propTypes = {
  disabled: PropTypes.bool,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
const defaultProps = {
  disabled: false,
  label: 'Lorem ipsum',
  onClick: () => {},
};

// Custom button styles
const StyledButton = styled(ButtonBase)`
  font-size: ${subHeadingConfig.large.fontSize}px;
  font-family: ${Fonts.Rubik};
  font-weight: ${subHeadingConfig.fontWeight};
  line-height: ${subHeadingConfig.large.lineHeight}px;
`;

const ButtonPrimary = (props) => {
  const { disabled, textColor, backgroundColor, label, children, onClick, ...rest } = props;

  //TODO: findBackgroundColor, textColor

  return (
    <StyledButton height="50px" {...rest}>
      {label}
    </StyledButton>
  );
};

ButtonPrimary.propTypes = propTypes;
ButtonPrimary.defaultProps = defaultProps;

export default ButtonPrimary;
