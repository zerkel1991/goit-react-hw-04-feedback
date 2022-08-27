import s from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
export default function FeedbackOptions({options,onLeaveFeedback}) {

return (

<ul className={s.btnList}>
{options.map ((el)=>{
  return  <li key={nanoid()} className={s.btnList__item}><button className ={s.btn} type = "button"  name={el}onClick={onLeaveFeedback}>{el}</button></li>
})

}

</ul>

)
}
FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

