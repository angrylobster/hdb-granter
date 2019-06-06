import React from 'react';
import estates from '../data/estates';
import { Form, Segment, Message } from 'semantic-ui-react';

export default function FlatDetails(props) {
    const { checkFlatDetails, errors, flatDetails, setFlatDetails } = props;
    const changeFlatDetails = (s, { name, value }) => {
        const flatDetailsCopy = Object.assign({}, flatDetails)
        flatDetailsCopy[name] = value;
        setFlatDetails(flatDetailsCopy);
    }

    return (
        <Segment style={{ width: '75%', margin: '0 auto' }}>
            <h3>Flat Details</h3>
            <p>Select the details of the flat that you are intending to purchase:</p>
            { errors.length > 0 && <Message error content='There were missing fields in your submission'/> }
            <Form onSubmit={checkFlatDetails}>
                <Form.Group inline>
                    <label>Flat type</label>
                    {['BTO', 'Resale Flat'].map((flatType, index) => {
                        return (
                            <Form.Radio
                                checked={flatDetails['flatType'] === flatType}
                                error={errors.includes('flatType')}
                                key={index}
                                label={flatType}
                                name={'flatType'}
                                onChange={changeFlatDetails}
                                value={flatType}
                            />
                        )
                    })}
                </Form.Group>
                <Form.Group inline>
                    <label>Number of Rooms</label>
                    {['2-Room Flexi', '3-Room', '4-Room', '5-Room', '3Gen', 'Executive Flat'].map((roomType, index) => {
                        return (
                            <Form.Radio
                                checked={flatDetails['roomType'] === roomType}
                                error={errors.includes('roomType')}
                                key={index}
                                label={roomType}
                                name={'roomType'}
                                onChange={changeFlatDetails}
                                value={roomType}
                            />
                        )
                    })}
                </Form.Group>
                <Form.Group inline>
                    <label>Location</label>
                    <Form.Dropdown
                        error={errors.includes('region')}
                        name='region'
                        onChange={changeFlatDetails}
                        options={estates.map((estate, index) => {
                            return {
                                key: index,
                                value: estate.name,
                                text: estate.name,
                            }
                        })}
                        placeholder='Select Location'
                        search
                        selection
                        value={flatDetails.region}
                    />
                </Form.Group>
                <Form.Button
                    content='Next'
                    type='submit'
                />
            </Form>
        </Segment>
    )
}