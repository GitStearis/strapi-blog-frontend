import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IArticleDto, IPreview } from '../../interfaces';
import { baseUrl } from "../../constants";
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

const renderPreview = (preview: IPreview) => {
    const url = `/articles/${ preview.Id }`;
    
    return (
        <ListItem>
            <Link className="link" to={ url }>
                <ListItemIcon className="arrow">
                    <ArrowForwardIosIcon htmlColor="#8f8f8f"/>
                </ListItemIcon>
                <ListItemText
                    className="link-text"
                    primary={ `[${ preview.Date }] | ${ preview.Title   }` }
                    secondary={ `by ${ preview.Author }` }
                />
            </Link>
        </ListItem>
    )
};

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
                            this.state.previews.map(preview => renderPreview(preview))
                        } 
                    </List>
                </div>   
            </div>
        );
    }
}

export default Previews;
