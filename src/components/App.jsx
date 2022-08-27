import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

export default function App () {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);


  const handleIncrement = event => {

    const name = event.target.name;
    switch (name) {
      case 'good':
        setGood(p => p + 1);

        break;

      case 'neutral':
        setNeutral(p => p + 1);

        break;

      case 'bad':
        setBad(p => p + 1);

        break;

      default:

        return;
    }
  };

  const totalIncrement = () =>{

   return good + neutral + bad
  }

  const positiveIncrement = () =>{

    const positiveCalc =  (good / totalIncrement())*100;
    return Math.round(positiveCalc);
  }



    return(

<div>
  <Section
  title= "Please leave feedback">
  <FeedbackOptions options ={["good","neutral","bad"]} onLeaveFeedback={handleIncrement} />
 </Section>
  <Section title = "Statistic">


  {totalIncrement() > 0 ?
    <Statistic
    good ={good}
    neutral={neutral}
    bad = {bad}
    total = {totalIncrement()}
    positivePercentage = {positiveIncrement()}
  /> :
    <Notification message="There is no feedback"/>
  }





  </Section>
</div>


)


}




