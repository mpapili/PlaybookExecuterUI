import React, { Component } from 'react';

class WorkflowMeta extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Title: "Title of Playbook",
            Desc:  "Brief Description of Playbook",
            Disabled: false,
            SubmitButton: 'Save and Create Steps',
        }
        this.handleChange = (e) => {
            let change = {}
            change[e.target.name] = e.target.value;
            this.setState(change)
        }
        this.handleSubmit = (e) => {
            e.preventDefault();
            this.setState({Disabled: true}) // lock it up
            this.setState({SubmitButton: 'Save Steps and Submit'})
            this.props.metaSubmitted(this.state)
        }
    }

    render(props) {
        return (
            <div>

              {/*Form for metadata (ex: title and desc)*/}
              <form onSubmit={this.handleSubmit} disabled={this.state.Disabled}>
                  <label style={{width: '100%'}}>
                    Title:<br/>
                    <input type="text" name="Title" value={this.state.Title} onChange={this.handleChange} disabled={this.state.Disabled} style={{margin: '5px'}}/>
                    <br/>Description:<br/>
                    <textarea type="text" name="Desc" value={this.state.Desc} onChange={this.handleChange} disabled={this.state.Disabled} style={{margin: '5px'}}/>
                  </label>
                  <input type="submit" value={this.state.SubmitButton} style={{margin: '10px'}}/>
              </form>

            </div>
        )
    }
}

export {WorkflowMeta}