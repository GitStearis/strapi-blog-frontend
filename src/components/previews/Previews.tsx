import React, { Component } from 'react';
import { List } from '@material-ui/core';
import { IArticleDto, IPreview } from '../../interfaces';
import { baseUrl } from "../../constants";
import Preview from '../preview/Preview';
import './Previews.css';


const defaultState = {
    previews: [],
    error: null
}

const mapArticleDtoToPreview = (article: IArticleDto) : IPreview => {
    const {
        id,
        Title,
        Author,
        Date
    } = article;

    return {
        Id: id,
        Title,
        Author,
        Date
    };
}

class Previews extends Component {
    state: {
        previews: IPreview[],
        error: any
    };

    constructor (props: any) {
        super(props);
        this.state = defaultState;
    }

    async componentDidMount () {
        const previews = await fetch(`${ baseUrl }/articles`)
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
