import { ApolloClient, ApolloLink } from '@apollo/client';
import { errorLink } from './ErrorHandling'
import { createHttpLink } from './link';
import { localCache } from './Cache';

export default createApolloClient = () => {
    const httpLink = createHttpLink();

    const apolloClient = new ApolloClient({
        link: ApolloLink.from([errorLink, httpLink]),
        cache: localCache,
        assumeImmutableResults: true,
    })
}