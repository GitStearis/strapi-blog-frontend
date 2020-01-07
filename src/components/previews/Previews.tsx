import React from 'react';
import { IArticleDto, IPreview } from '../../interfaces';
import './Previews.css';

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
    return (
        <div className="preview">
            <a>{ preview.Title }</a>
            <p>by { preview.Author }</p>
            <p>{ preview.Date }</p>
        </div>
    )
};

const Previews : React.FC = () => {
    const previews = articles.map(article => mapArticleDtoToPreview(article));

    return (
        <div className="previews">
            {
                previews.map(preview => renderPreview(preview))
            }
        </div>
    );
};

const articles = [
    {
        "id": 1,
        "Title": "Ноотропы: фенибут",
        "Author": "Околоайтишник",
        "Content": "🇧🇷  Мое волонтерство-кураторство на Вулице Бразил подошло к концу, я решил зав" +
            "ершить трилогию ноотропических постов. Сегодня на обзоре красавец фенибут. Из вс" +
            "ей троицы я считаю его самым мощным, как по принципу действия, так и по последст" +
            "виям. Будет интересно, короче, но сперва немного теории!",
        "Date": "2020-01-05",
        "created_at": "2020-01-05T12:07:46.315Z",
        "updated_at": "2020-01-05T12:07:46.315Z",
        "Cover": {
            "id": 1,
            "name": "photo_2020-01-05_15-07-14.jpg",
            "hash": "533249e8371b4b5785841ced071deb30",
            "sha256": "0nRJc5gAno0qFkRPl2ffbaho9uzEBAZcuZfSqlzWcNQ",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 118.17,
            "url": "/uploads/533249e8371b4b5785841ced071deb30.jpg",
            "provider": "local",
            "provider_metadata": null,
            "created_at": "2020-01-05T12:07:46.366Z",
            "updated_at": "2020-01-05T12:07:46.366Z"
        }
    }
];

export default Previews;
