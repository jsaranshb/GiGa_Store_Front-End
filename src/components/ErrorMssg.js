import React from "react"
import Alert from 'react-bootstrap/Alert';
function ErrorMssg() {
    return (
        <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
            This is the DATA NOT FOUND error or NETWORK error with status code 404, 
            Please check your internet connection and try again.
            </p>
        </Alert>
    );
}
export default ErrorMssg;
