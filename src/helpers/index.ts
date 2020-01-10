import { IArticleDto, IArticle, IPreview } from "../interfaces";

export const mapArticleDto = (articleDto: IArticleDto) : Promise<IArticle> => {
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

export const mapArticleDtoToPreview = (article: IArticleDto) : IPreview => {
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