import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://bigbrainblog-23f3bd84d9f8.herokuapp.com/graphql',
    cache: new InMemoryCache()
});

export default client;