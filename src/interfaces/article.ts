interface Entity {
    id: number;
    created_at: string;
    updated_at: string; 
}

export interface Preview {
    Id: number;
    Title: string;
    Author: string;
    Date: string;
}

export interface Article extends Preview {
    Content: string;
    Cover: Cover;
}

export interface Cover {
    Name: string;
    Url: string;
}

export interface ArticleDto extends Entity {
    Title: string;
    Author: string;
    Content: string;
    Date: string;
    Cover: CoverDto;
}

export interface CoverDto extends Entity {
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
