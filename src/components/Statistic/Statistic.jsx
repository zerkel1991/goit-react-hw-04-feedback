import s from './Statistic.module.css'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

export default  function Statistic({good,neutral,bad,total,positivePercentage}) {

return (

<ul  className = {s.list}>
  <li key = {nanoid()} className = {s.item}><span className = {s.itemtext}>Good : {good} </span></li>
  <li key = {nanoid()} className = {s.item}><span className = {s.itemtext}>Neutral : {neutral}</span></li>
  <li key = {nanoid()} className = {s.item}><span className = {s.itemtext}>Bad : {bad}</span></li>
  <li key = {nanoid()} className = {s.item}><span className = {s.itemtext}>Total : {total}</span></li>
  <li key = {nanoid()} className = {s.item}><span className = {s.itemtext}>Positive feedback : {positivePercentage} %</span></li>
</ul>
)
}
Statistic.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  totalfeedback: 0,
  feedbackPercentage: 0,
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalfeedback: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};
