import gql from 'graphql-tag';

export const GET_ALL_ARTICLES = gql`
    query AllArticles {
        articles {
            id
            title
            author
            createdDate
        }
    }
`;