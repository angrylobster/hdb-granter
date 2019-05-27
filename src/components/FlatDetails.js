import React from 'react';
import estates from '../data/estates';
import { Form, Segment, Message } from 'semantic-ui-react';

export default function FlatDetails(props) {
    console.log('Flat Details props', props);
    const { nextIndex, flatDetails, setFlatDetails } = props;

    const handleChange = (s, e) => {
        const newFlatDetails = Object.assign({}, flatDetails)
        newFlatDetails[e.name] = e.value;
        setFlatDetails(newFlatDetails);
    }

    const submitFlatDetails = () => {
        const errors = [];
        const {gotoIndex, nextIndex} = props;
        for (let key in flatDetails) {
            if (!flatDetails[key]) {
                errors.push(key)
            }
        }
        const flatDetailsCopy = Object.assign({}, flatDetails);
        if (errors.length === 0){
            flatDetailsCopy['errors'] = [];
            setFlatDetails(flatDetailsCopy);
            const roomType = flatDetails.roomType
            if (roomType === '5-Room' || roomType === '3Gen' || roomType === 'Executive Flat'){
                gotoIndex(-1);
            } else {
                nextIndex();
            }
        } else {
            flatDetailsCopy['errors'] = errors;
            setFlatDetails(flatDetailsCopy);
        }
    }

    const renderErrors = () => {
        const errorMessages = [];
        if (flatDetails.errors.includes('flatType')) {
            errorMessages.push('Flat type was not specified');
        }
        if (flatDetails.errors.includes('roomType')) {
            errorMessages.push('Room type was not specified');
        }
        if (flatDetails.errors.includes('region')) {
            errorMessages.push('Region was not specified');
        }
        return (
            <Message
                error
                header='There were some errors with your submission'
                list={errorMessages}
            />
        )
    }

    console.log('flat errors', flatDetails.errors)

    return (
        <Segment style={{ width: '75%', margin: '0 auto' }}>
            <h3>Flat Details</h3>
            {flatDetails.errors && flatDetails.errors.length > 0 ? renderErrors() : null}
            <p>Select the details of the flat that you are intending to purchase:</p>
            <Form onSubmit={submitFlatDetails}>
                <Form.Group inline>
                    <label>Flat type</label>
                    <Form.Radio
                        label='BTO'
                        value='BTO'
                        name='flatType'
                        checked={flatDetails.flatType === 'BTO'}
                        error={flatDetails.errors && flatDetails.errors.includes('flatType')}
                        onChange={handleChange}
                    />
                    <Form.Radio
                        label='Resale Flat'
                        value='Resale Flat'
                        name='flatType'
                        checked={flatDetails.flatType === 'Resale Flat'}
                        error={flatDetails.errors && flatDetails.errors.includes('flatType')}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group name="test" inline>
                    <label>Number of Rooms</label>
                    <Form.Radio
                        label='2-Room Flexi'
                        value='2-Room Flexi'
                        name='roomType'
                        checked={flatDetails.roomType === '2-Room Flexi'}
                        error={flatDetails.errors && flatDetails.errors.includes('roomType')}
                        onChange={handleChange}
                    />
                    <Form.Radio
                        label='3-Room'
                        value='3-Room'
                        name='roomType'
                        checked={flatDetails.roomType === '3-Room'}
                        error={flatDetails.errors && flatDetails.errors.includes('roomType')}
                        onChange={handleChange}
                    />
                    <Form.Radio
                        label='4-Room'
                        value='4-Room'
                        name='roomType'
                        checked={flatDetails.roomType === '4-Room'}
                        error={flatDetails.errors && flatDetails.errors.includes('roomType')}
                        onChange={handleChange}
                    />
                    <Form.Radio
                        label='5-Room'
                        value='5-Room'
                        name='roomType'
                        checked={flatDetails.roomType === '5-Room'}
                        error={flatDetails.errors && flatDetails.errors.includes('roomType')}
                        onChange={handleChange}
                    />
                    <Form.Radio
                        label='3Gen'
                        value='3Gen'
                        name='roomType'
                        checked={flatDetails.roomType === '3Gen'}
                        error={flatDetails.errors && flatDetails.errors.includes('roomType')}
                        onChange={handleChange}
                    />
                    <Form.Radio
                        label='Executive Flat'
                        value='Executive Flat'
                        name='roomType'
                        checked={flatDetails.roomType === 'Executive Flat'}
                        error={flatDetails.errors && flatDetails.errors.includes('roomType')}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group inline>
                    <label>Location</label>
                    <Form.Dropdown
                        placeholder='Select Location'
                        search
                        selection
                        name='region'
                        value={flatDetails.region}
                        error={flatDetails.errors && flatDetails.errors.includes('region')}
                        options={estates.map((estate, index) => {
                            return {
                                key: index,
                                value: estate.name,
                                text: estate.name,
                            }
                        })}
                        onChange={handleChange}
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