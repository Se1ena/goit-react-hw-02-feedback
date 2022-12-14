import React from 'react';
import css from 'components/Statistics/Statistics.module.css';

class Feedback extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {
        //
    }

    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue,
        total: this.props.initialValue,
        positiveFeedback: this.props.initialValue,
    };

    handleEncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    handleEncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    handleEncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };


    countTotalFeedback = () => {
        this.setState(prevState => ({
            total: prevState.good + prevState.neutral + prevState.bad,
        }));
    };


    render() {
        return(
            <div className='Feedback'>
        <span className='Feedback__value'>Good: {this.state.good}</span>
        <span className='Feedback__value'>Neutral: {this.state.neutral}</span>
        <span className='Feedback__value'>Bad: {this.state.bad}</span>
        <span className='Feedback__value'>Total: {this.state.total}</span>
        <span className='Feedback__value'>Positive feedback: {this.state.positiveFeedback}</span>

        <div className='Feedback__controls'>
        <button type='button' onClick={this.handleEncrementGood}>Good</button>
        <button type='button' onClick={this.handleEncrementNeutral}>Neutral</button>
        <button type='button' onClick={this.handleEncrementBad}>Bad</button>
        </div>
    </div>
        );
    }
}

export default Feedback;