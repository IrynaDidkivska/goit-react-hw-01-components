import React from 'react';
import PropTypes from 'prop-types';
import { Item, Section, Stats, Title } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Stats>
        {stats.map(el => (
          <Item key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </Item>
        ))}
      </Stats>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
