import React from 'react';
import { Form, Segment } from 'semantic-ui-react';

const incomeOptions = [
    { key: 1, text: 'Less than or equal to $1,500', value: 1500 },
    { key: 2, text: '$1,501 to $2,000', value: 2000 },
    { key: 3, text: '$2,001 to $2,500', value: 2500 },
    { key: 4, text: '$2,501 to $3,000', value: 3000 },
    { key: 5, text: '$3,001 to $3,500', value: 3500 },
    { key: 6, text: '$3,501 to $4,000', value: 4000 },
    { key: 7, text: '$4,001 to $4,500', value: 4500 },
    { key: 8, text: '$4,501 to $5,000', value: 5000 },
    { key: 9, text: '$5,001 to $5,500', value: 5500 },
    { key: 10, text: '$5,501 to $6,000', value: 6000 },
    { key: 11, text: '$6,001 to $6,500', value: 6500 },
    { key: 12, text: '$6,501 to $7,000', value: 7000 },
    { key: 13, text: '$7,001 to $7,500', value: 7500 },
    { key: 14, text: '$7,501 to $8,000', value: 8000 },
    { key: 15, text: '$8,001 to $8,500', value: 8500 },
    { key: 16, text: 'More than $8,500', value: Infinity },
]

export default function ApplicantDetails(props) {
    const { applicant, checkApplicantsDetails, coapplicant, errors, index, setApplicant, setCoapplicant, setIndex } = props;

    const changeApplicantDetails = (s, { name, value }) => {
        const applicantCopy = Object.assign({}, applicant);
        applicantCopy[name] = value;
        setApplicant(applicantCopy);
    }

    const changeCoapplicantDetails = (s, { name, value }) => {
        const coapplicantCopy = Object.assign({}, coapplicant);
        coapplicantCopy[name] = value;
        setCoapplicant(coapplicantCopy);
    }

    console.log('Applicant', applicant, 'Coapplicant', coapplicant);

    return (
        <Segment style={{ width: '75%', margin: '0 auto' }}>
            <h3>Applicant Details</h3>
            <Form onSubmit={checkApplicantsDetails}>
                <p>Input your personal details:</p>
                <Segment>
                    <Form.Group inline>
                        <label>Age</label>
                        {['Below 21', '21 and above'].map((ageGroup, index) => {
                            return (
                                <Form.Radio
                                    checked={applicant['ageGroup'] === ageGroup}
                                    key={index}
                                    label={ageGroup}
                                    name='ageGroup'
                                    onChange={changeApplicantDetails}
                                    value={ageGroup}
                                />
                            )
                        })}
                    </Form.Group>
                    <Form.Group inline>
                        <label>Citizenship</label>
                        {['Singaporean', 'Permanent Resident', 'Foreigner'].map((citizenship, index) => {
                            return (
                                <Form.Radio
                                    checked={applicant['citizenship'] === citizenship}
                                    key={index}
                                    label={citizenship}
                                    name='citizenship'
                                    onChange={changeApplicantDetails}
                                    value={citizenship}
                                />
                            )
                        })}
                    </Form.Group>
                    <Form.Group inline>
                        <label>Income (per month)</label>
                        <Form.Dropdown
                            name='income'
                            onChange={changeApplicantDetails}
                            options={incomeOptions}
                            placeholder='Select Income Bracket'
                            selection
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Martial status</label>
                        {['Married', 'Engaged', 'Single'].map((maritalStatus, index) => {
                            return (
                                <Form.Radio
                                    checked={applicant['maritalStatus'] === maritalStatus}
                                    key={index}
                                    label={maritalStatus}
                                    name='maritalStatus'
                                    onChange={changeApplicantDetails}
                                    value={maritalStatus}
                                />
                            )
                        })}
                    </Form.Group>
                    {
                        applicant.maritalStatus === 'Single' ?
                            <Form.Group inline>
                                <label>Purchasing</label>
                            </Form.Group> : null
                    }
                </Segment>
                {
                    applicant.maritalStatus === 'Married' || applicant.maritalStatus === 'Engaged' ?
                        <>
                            <Segment>
                                <Form.Group inline>
                                    <label>Age</label>
                                    {['Below 21', '21 and above'].map((ageGroup, index) => {
                                        return (
                                            <Form.Radio
                                                checked={coapplicant['ageGroup'] === ageGroup}
                                                key={index}
                                                label={ageGroup}
                                                name='ageGroup'
                                                onChange={changeCoapplicantDetails}
                                                value={ageGroup}
                                            />
                                        )
                                    })}
                                </Form.Group>
                                {/* <Form.Group inline>
                                    <label>Martial status</label>
                                    {['Married', 'Engaged', 'Single'].map((maritalStatus, index) => {
                                        return (
                                            <Form.Radio
                                                checked={applicant['maritalStatus'] === maritalStatus}
                                                key={index}
                                                label={maritalStatus}
                                                name='maritalStatus'
                                                onChange={changeCoapplicantDetails}
                                                value={maritalStatus}
                                            />
                                        )
                                    })}
                                </Form.Group> */}
                                <Form.Group inline>
                                    <label>Income (per month)</label>
                                    <Form.Dropdown
                                        name='income'
                                        onChange={changeCoapplicantDetails}
                                        options={incomeOptions}
                                        placeholder='Select Income Bracket'
                                        selection
                                    />
                                </Form.Group>
                            </Segment>
                        </> : null
                }
                <Form.Group inline>
                    <Form.Button onClick={() => setIndex(index - 1)}>Previous</Form.Button>
                    <Form.Button type="submit">Next</Form.Button>
                </Form.Group>
            </Form>
        </Segment>
    )
}