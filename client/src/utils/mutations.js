import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String, $password: String) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
            
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($authors: [String], $title: String, $description: String, $image: String, $bookId: String, $link: String) {
        saveBook(authors: $authors, title: $title, description: $description, image: $image, bookId: $bookId, link: $link) {
            bookId
            authors
            description
            image
            link
        }
    }`

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String) {
        removeBook(bookId: $bookId) 
    }`

