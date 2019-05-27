import React from 'react';
import { Form, Segment } from 'semantic-ui-react';

export default function ApplicantDetails(props) {
    const { nextIndex, prevIndex } = props;
    const submitApplicantDetails = () => alert('applicant details submitted');
    return (
        <Segment style={{ width: '75%', margin: '0 auto' }}>
            <h3>Applicant Details</h3>
            {/* {flatDetails.errors && flatDetails.errors.length > 0 ? renderErrors() : null} */}
            <p>Input the details of the applicants who are intending to purchase the flat:</p>
            <Form onSubmit={submitApplicantDetails}>
                <label>Applicants</label>
                <Form.Group inline>
                    
                </Form.Group>
            </Form>
        </Segment>
    )
}