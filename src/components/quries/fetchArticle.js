import gql from 'graphql-tag';

export const GET_ARTICLE_DETAIL = gql`
    query ArticleQuery($id: ID!) {
        article(id: $id) {
            id
            title
            author
            createdDate
            openingImageUrl
            category
            summary
            texts {
                id
                paragraph
            }
            sources{
                id
                sourceName
                url
            }
        }
    }
`;