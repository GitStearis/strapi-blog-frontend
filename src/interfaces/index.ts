interface IEntity {
    id: number;
    created_at: string;
    updated_at: string; 
}

export interface IPreview {
    Id: number;
    Title: string;
    Author: string;
    Date: string;
}

export interface IArticle extends IPreview {
    Content: string;
    Cover: ICover;
}

export interface ICover {
    Name: string;
    Url: string;
}

export interface IArticleDto extends IEntity {
    Title: string;
    Author: string;
    Content: string;
    Date: string;
    Cover: CoverDto;
}

export interface CoverDto extends IEntity {
    name: string;
    hash: string;
    sha256: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    provider: string;
    provider_metadata: string | null;
}

export interface ArticleRouteParams {
    id: string;
}
