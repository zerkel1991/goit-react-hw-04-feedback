import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={s.section}>
    {title && <h2 className={s.title}>{title}</h2>}
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
