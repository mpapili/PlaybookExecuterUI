import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardBlock, CardFooter} from 'react-bootstrap-card';


// Form detailing a step in a workflow
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
            console.log(e)
            event.preventDefault();
            this.props.addCard(this.state); // send it back up!
            this.setState({Disabled: true}) // lock it up
        }
        this.finishClicked = () => {
            console.log("finish was clicked!")
            this.props.addCard(this.state);  // add our final card
            /* now we'll want to somehow trigger the WorkflowCards component to send
               all of its card info back up to the PlaybookMaker component */
            this.props.finished();
        }
    }
    

    render(props) {
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
                <input type="button" value="Finish" onClick={this.finishClicked} disabled={this.state.Disabled}/>

            </form>
        )
    }
}

// Card object containing the form for creating a Step
class StepCard extends React.Component {

    render(props) {
        return (
            <Card style={{ width: '18rem', margin: '25px'}}>

                <CardBlock>
                    <CardTitle>
                        Step {this.props.num}
                    </CardTitle>
                    <StepForm addCard={this.props.addCard} finished={this.props.finished}/>
                </CardBlock>

            </Card>
        );
    }
}


// Contains all Steps/Cards
class WorkflowCards extends React.Component {
    state = { elements: [] }
    
    formSubmit = (formData) => {
        let newElems = [...this.state.elements, formData]
        this.setState({elements: newElems})
    }
    
    finishSteps = () => {
        console.log("All Steps are now finished!")
        /* Last card will have been added at this time; need to now get "elements" (rename?) 
           back up to the state of the PlaybookMaker component */
    }
    
    render() {
        
        return (
            <div style={{display: 'flex', flexDirection: 'row', flexFlow: 'wrap', width: '400%'}}>

              {/* First Card */}
              <StepCard key={-1} num={1} addCard={this.formSubmit} finished={this.finishSteps}> </StepCard>
            
              {/* Cards for Added Steps */}
              {this.state.elements.map((v, i) => {
                   return <StepCard key={i} num={i + 2} addCard={this.formSubmit} finished={this.finishSteps}> </StepCard>
              })}

            </div>
        )
    }
}


export {WorkflowCards};