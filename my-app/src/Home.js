import React from 'react';
import styled from 'styled-components';const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);`;
import {WorkflowCards} from './WorkflowCards.js';
import {WorkflowMeta} from './WorkflowMeta.js';


class PlaybookMaker extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            Steps: [],
            Title: 'Create a Playbook',
            Desc: '',
            ShowMetaData: true,
            ShowStepCards: false,
        }
    }
    
    metaSubmitted = async (metaData) => {
        await this.setState({Title: metaData.Title})
        await this.setState({Desc: metaData.Desc})
        this.setState({ShowStepCards: true,
                       ShowMetaData: false})
        console.log("this.state is now", this.state)
    }
    
    render = () => {
        return (
            <div>
                <h2><p>{this.state.Title}</p></h2>
            
                {/*MetaData Form*/}
                { this.state.ShowMetaData
                    ? <WorkflowMeta metaSubmitted={this.metaSubmitted}/>
                    : null
                }
            
                {/*Steps Cards*/}
                { this.state.ShowStepCards
                    ? <GridWrapper><WorkflowCards/></GridWrapper>
                    : null
                }

            </div>
        );
    }
}


export const Home = (props) => (
  <div>
      <PlaybookMaker/>
  </div>
)

export {PlaybookMaker}