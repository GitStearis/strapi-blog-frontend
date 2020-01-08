import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonIcon from '@material-ui/icons/Person';
import { ArticleRouteParams, IArticleDto, IArticle } from '../../interfaces';
import { baseApiUrl } from '../../constants';
import './Article.css';


const defaultState = {
    article: {
        Id: 0,
        Content: "",
        Title: "",
        Author: "",
        Date: "",
        Cover: {
            Name: "",
            Url: ""
        }
    },
    error: null
}

const mapArticleDto = (articleDto: IArticleDto) : Promise<IArticle> => {
    const {
        id,
        Content,
        Cover,
        Title,
        Author,
        Date
    } = articleDto;

    return Promise.resolve({
        Id: id,
        Content,
        Title,
        Author,
        Date,
        Cover: {
            Name: Cover.name,
            Url: Cover.url
        }
    });
}

class Article extends Component {
    state: {
        article: IArticle
        error: any
    };

    constructor (props: RouteChildrenProps) {
        super(props);
        this.state = defaultState;
    }

    componentDidMount () {
        const props = this.props as RouteChildrenProps;
        const { id } = props.match!.params as ArticleRouteParams;

        fetch(`${ baseApiUrl }/articles/${ id }`)
            .then(response => response.json())
            .then(articleDto => mapArticleDto(articleDto))
            .then(article => this.setState({
                article
            }))
            .catch(error => this.setState({
                error
            }));
    }

    render () {
        const {
            article,
            error
        } = this.state;

        if (error) {
            return null;
        } else {
            return (
                <article className="article-container">
                    <Card>
                        <CardMedia  className="image" 
                                    image={ `${ baseApiUrl }${ article.Cover.Url }` }
                                    title={ article.Cover.Name }/>
                        <CardContent className="article">
                            <Typography className="title">
                                { article.Title }
                            </Typography>
                            <Typography className="author">
                                <PersonIcon className="icon"/>
                                { article.Author }
                            </Typography>
                            <Typography className="date">
                                <CalendarTodayIcon className="icon"/>
                                { article.Date }
                            </Typography>
                            <br />
                            <Typography className="content">
                                { article.Content }
                            </Typography>
                        </CardContent>
                    </Card>

                </article>
            );
        }  
    }
}

export default Article;
