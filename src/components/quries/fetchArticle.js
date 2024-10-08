import gql from 'graphql-tag';

export const GET_ARTICLE_DETAIL = gql`
    query ArticleQuery($id: ID!) {
        article(id: $id) {
            id
            title
            author
            createdDate
            texts {
                id
                paragraph
            }
        }
    }
`;