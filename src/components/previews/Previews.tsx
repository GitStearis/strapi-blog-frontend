import React, { Component } from 'react';
import { List } from '@material-ui/core';
import { RouteChildrenProps } from 'react-router-dom';
import Preview from '../preview/Preview';
import { IArticleDto, IPreview } from '../../interfaces';
import { mapArticleDtoToPreview } from '../../helpers';
import { baseApiUrl } from "../../constants";
import './Previews.css';


const defaultState = {
    previews: [],
    error: null
}

class Previews extends Component<RouteChildrenProps> {
    state: {
        previews: IPreview[],
        error: any
    };

    constructor (props: RouteChildrenProps) {
        super(props);
        this.state = defaultState;
    }

    async componentDidMount () {
        const previews = await fetch(`${ baseApiUrl }/articles`)
            .then(response => response.json())
            .then((articles: IArticleDto[]) => articles.map((article: IArticleDto) => mapArticleDtoToPreview(article)));
        
        this.setState({
            previews
        });
    }

    render () {
        return (
            <div className="previews-container">
                <div className="previews">
                    <List>
                        {
                            this.state.previews.map(preview => {
                                return (<Preview key={ preview.Title } preview={ preview } />)
                            })
                        } 
                    </List>
                </div>   
            </div>
        );
    }
}

export default Previews;
