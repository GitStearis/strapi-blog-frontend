import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { ArticleRouteParams, IArticleDto, IArticle } from '../../interfaces';
import { baseUrl } from '../../constants';
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

        fetch(`${ baseUrl }/articles/${ id }`)
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
                <article className="article">
                    <h1>{ article.Title }</h1>
                </article>
            );
        }  
    }
}

export default Article;
