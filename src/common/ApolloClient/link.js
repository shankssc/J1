import { HttpLink } from '@apollo/client/link/http';

export default createHttpLink = () => {
  return new HttpLink({
    uri: 'http://localhost:5000/graphql',
  });
}