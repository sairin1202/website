import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Graph } from "react-d3-graph";
import { TextField } from '@material-ui/core';
import InputField from "./component"

export default class GraphBox extends React.Component {
    constructor(props) {
        super(props);
        const config = {
            nodeHighlightBehavior: true,
            node: {
                color: "lightgreen",
                size: 120,
                highlightStrokeColor: "blue",
            },
            link: {
                highlightColor: "lightblue",
            },
        };

        const data = {
            nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
            links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
        };

        this.state = {
            config: config,
            data: data,
        };
    }
    // graph event callbacks
    onClickGraph = () =>  {
        // window.alert(`Clicked the graph background`);
    };

    onClickNode = (nodeId) => {
        window.alert(`Clicked node ${this.state}`);
        const newNode = `Node new`;
        this.state.data.nodes.push({ id: newNode });
        this.state.data.links.push({ source: "Harry", target: newNode });
        this.setState({
            data: this.state.data,
        });
    };

    onDoubleClickNode = (nodeId) => {
        // window.alert(`Double clicked node ${nodeId}`);
    };

    onRightClickNode = (event, nodeId) => {
        // window.alert(`Right clicked node ${nodeId}`);
    };

    onMouseOverNode = (nodeId) => {
        // window.alert(`Mouse over node ${nodeId}`);
    };

    onMouseOutNode = (nodeId) => {
        // window.alert(`Mouse out node ${nodeId}`);
    };

    onClickLink = (source, target) => {
        // window.alert(`Clicked link between ${source} and ${target}`);
    };

    onRightClickLink = (event, source, target) => {
        // window.alert(`Right clicked link between ${source} and ${target}`);
    };

    onMouseOverLink = (source, target) => {
        // window.alert(`Mouse over in link between ${source} and ${target}`);
    };

    onMouseOutLink = (source, target) => {
        // window.alert(`Mouse out link between ${source} and ${target}`);
    };

    onNodePositionChange = (nodeId, x, y) => {
        // window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
    };


    render() {
        // This does not happens in this sandbox scenario running time, but if we set staticGraph config
        // to true in the constructor we will provide nodes with initial positions


        const graphProps = {
            id: "graph",
            data: this.state.data,
            config: this.state.config,
            onClickNode: this.onClickNode,
            onDoubleClickNode: this.onDoubleClickNode,
            onRightClickNode: this.onRightClickNode,
            onClickGraph: this.onClickGraph,
            onClickLink: this.onClickLink,
            onRightClickLink: this.onRightClickLink,
            onMouseOverNode: this.onMouseOverNode,
            onMouseOutNode: this.onMouseOutNode,
            onMouseOverLink: this.onMouseOverLink,
            onMouseOutLink: this.onMouseOutLink,
            onNodePositionChange: this.onNodePositionChange,
        };
        return (
            <div>
                <Graph ref="graph" {...graphProps} />
            </div>
        )
    }
}