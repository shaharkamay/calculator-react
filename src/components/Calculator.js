import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import numsToWords from 'number-to-words';
import { getByDisplayValue } from '@testing-library/dom';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expression: '', answer: '' };
    }
    display = (char) => {
        let expression = this.state.expression;
        if(char === 'AC') {
            this.setState({ expression: '', answer: '' })
            return;
        }
        if(char === '-') {
            if(expression[expression.length - 1] === '-') return;
        }
        if(char !== 'AC' && char !== '.' && isNaN(char)) {
            if(expression[expression.length - 1] === '.') return;
            if(expression.length === 0) return;
            while(
                expression[expression.length - 1] !== '.' 
                && char !== '-'
                && isNaN(expression[expression.length - 1])
                ) {
                    console.log(expression)
                    expression = expression.substr(0, expression.length - 1);
            }
        }
        if(char === '.') {
            if(expression[expression.length - 1] === '.') return;
            const reverseExpArr = expression.split('').reverse();
            const index = reverseExpArr.findIndex(isNaN);
            if(reverseExpArr[index] === '.') return;
        }

        expression = this.cleanZeros(expression + char);
        const answer = this.cleanZeros(this.state.answer + char);

        if(char !== '.' && isNaN(char)) {
            
            this.setState({ expression, answer: '' });
            return;
        }

        this.setState({ expression, answer })
    }
    calculate = () => {
        if(this.state.expression.length === 0) return;
        this.setState({ expression: eval(this.state.expression).toString(), answer: eval(this.state.expression).toString() });
    }

    cleanZeros = str => str.replace(/^0+(\d)/, '$1');

    render() {
        return (
            <div className="calc-container calc-grid">
                <div id="display-container">
                    <div id="exp">{this.state.expression || '0'}</div>
                    <div id="display">{this.state.answer || '0'}</div>
                </div>
                <Button id="clear" value="AC" onClick={this.display} />
                <Button id="divide" className="oper" value="/" onClick={this.display} />
                <Button id="multiply" className="oper" value="*" onClick={this.display} />
                {[7, 8, 9].map((num, i) => <Button id={numsToWords.toWords(num)} value={num} key={num} onClick={this.display} />)}
                <Button id="subtract" className="oper" value="-" onClick={this.display} />
                {[4, 5, 6].map((num, i) => <Button id={numsToWords.toWords(num)} value={num} key={num} onClick={this.display} />)}
                <Button id="add" className="oper" value="+" onClick={this.display} />
                {[1, 2, 3].map((num, i) => <Button id={numsToWords.toWords(num)} value={num} key={num} onClick={this.display} />)}
                <Button id="equals" value="=" onClick={this.calculate} />
                <Button id={numsToWords.toWords(0)} value={0} key={0} onClick={this.display} />
                <Button id="decimal" value="." onClick={this.display} />
            </div>
        );
    }
}

export default Calculator;