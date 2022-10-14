import React from 'react';
import {Link} from "react-router-dom";

import PageConponent from '../../interfaces/pageComponent';

import './NavigationBar.css'

type NavigatorProperties={
    pages: Array<PageConponent>,
}


class NavigationBar extends React.Component<NavigatorProperties> {
    constructor(props: NavigatorProperties) {
        super(props);
        console.log("Constructed with " + props.pages);
        props.pages.forEach(element => {
            console.log(element.path)
        });
    }    

    public render() {
        return (
            <article>
                <ul id="elements-holder">
                    {this.props.pages.map((pageData: PageConponent) => {<li><Link to={pageData.path}>{pageData.label_element}</Link></li>})}
                </ul>
            </article>);
        
        }
}

export default NavigationBar;