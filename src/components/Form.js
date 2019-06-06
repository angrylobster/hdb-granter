import React, { useState } from 'react';
import FlatDetails from './FlatDetails';
import ApplicantsDetails from './ApplicantsDetails';

export default function Form() {
    const [index, setIndex] = useState(1);
    const [flatDetails, setFlatDetails] = useState({})
    const [applicant, setApplicant] = useState({});
    const [coapplicant, setCoapplicant] = useState({});
    const [errors, setErrors] = useState([]);

    const checkFlatDetails = () => {
        const { roomType } = flatDetails;
        const missingFields = ['flatType', 'roomType', 'region'].filter(field => !flatDetails[field]);
        setErrors(missingFields);
        if(missingFields.length === 0) {
            (roomType === '5-Room' || roomType === '3Gen' || roomType === 'Executive Flat') ?
                setIndex(-1) :
                setIndex(index + 1)
        }
    }

    const checkApplicantsDetails = () => {
        alert('applicants details checked')
    }

    switch (index) {
        case 1:
            return (
                <FlatDetails
                    checkFlatDetails={checkFlatDetails}
                    errors={errors}
                    flatDetails={flatDetails}
                    setFlatDetails={setFlatDetails}
                />
            )
        case 2:
            return (
                <ApplicantsDetails
                    applicant={applicant}
                    checkApplicantsDetails={checkApplicantsDetails}
                    coapplicant={coapplicant}
                    errors={errors}
                    index={index}
                    setApplicant={setApplicant}
                    setCoapplicant={setCoapplicant}
                    setIndex={setIndex}
                />
            )
        case 3:
            return <h3>Calculations</h3>;
        case 4:
            return <h3>Done</h3>;
        case -1:
            return <h3>Did not qualify</h3>
        default:
            return null;
    }
}