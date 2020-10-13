import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CARD_TYPES from '../constants/cardTypes';

const CardChip = styled.span`
  overflow: hidden;
  white-space: nowrap;
  padding: 4px 12px;
  text-overflow: ellipsis;
  border-radius: 15px;
  background-color: #3c3d48;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  color: ${(props) => props.color || CARD_TYPES.default};
  box-shadow: 0 1px 2px grey;
  margin-bottom: -2em;
  z-index: 500;
`;

/**
 *  Chip Component
 * @param {object} props - component props
 * @returns {JSX} react component
 */
const Chip = (props) => <CardChip color={props.color}>{ props.children }</CardChip>;

Chip.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Chip;
