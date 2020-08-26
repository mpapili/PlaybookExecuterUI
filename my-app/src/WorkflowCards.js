import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardBlock, CardFooter} from 'react-bootstrap-card';


class StepForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            StepName: "Name of Step",
            TargetMachine: "Target Machine to Run On",
            Command: "Command to be executed",
            Disabled: false,
        }
        this.handleChange = (e) => {
            let change = {}
            change[e.target.name] = e.target.value;
            this.setState(change)
        }
        this.handleSubmit = (e) => {
            console.log("a form was submitted")
            console.log("form state is currently ", this.state)
            event.preventDefault();
            this.props.addCard(this.state); // send it back up!
            this.setState({Disabled: true}) // lock it up
        }
    }
    

    render(props) {
        console.log(this.props.addCard);
        return (
            <form onSubmit={this.handleSubmit}>

                <label>
                    Step Name:
                    <input type="text" name="StepName" value={this.state.StepName} onChange={this.handleChange} disabled={this.state.Disabled}/>
                </label>

                <label>
                    Target Machine:
                    <input type="text" name="TargetMachine" value={this.state.TargetMachine} onChange={this.handleChange} disabled={this.state.Disabled}/>
                </label>

                <label>
                    Command:
                    <input type="text" name="Command" value={this.state.Command} onChange={this.handleChange} disabled={this.state.Disabled}/>
                </label>

                <input type="submit" value="Add Another Step" disabled={this.state.Disabled}/>

            </form>
        )
    }
}

class StepCard extends React.Component {

    render(props) {
        console.log(this.props)
        return (
            <Card style={{ width: '18rem', margin: '25px'}}>

                <CardBlock>
                    <CardTitle>
                        Step {this.props.num}
                    </CardTitle>
                    <StepForm addCard={this.props.addCard}/>
                </CardBlock>
            </Card>
        );
    }
}


class WorkflowCards extends React.Component {
    state = { elements: [] }
    
    formSubmit = (formData) => {
        console.log("running addcard!");
        console.log(formData)
        let newElems = [...this.state.elements, formData]
        this.setState({elements: newElems})
        console.log("elements are now", this.state.elements)
    }
    render() {
        
        return (
            <div style={{display: 'flex', flexDirection: 'row', flexFlow: 'wrap', width: '400%'}}>
              {/* First Card */}
              <StepCard key={-1} num={1} addCard={this.formSubmit}> </StepCard>
            
              {/* Card for Added Steps */}
              {this.state.elements.map((v, i) => {
                   return <StepCard key={i} num={i + 2} addCard={this.formSubmit}> </StepCard>  
              })}

            </div>
        )
    }
}


export {WorkflowCards};
export {StepCard};