import React, {useState} from 'react';
import FlatDetails from './FlatDetails';
import ApplicantDetails from './ApplicantDetails';

export default function Form(){
    const [index, setIndex] = useState(1);
    const [flatDetails, setFlatDetails] = useState({
        flatType: '',
        roomType: '',
        region: '',
        errors: [],
    })

    const nextIndex = e => setIndex(index + 1);
    const prevIndex = e => setIndex(index - 1);
    const gotoIndex = v => setIndex(v);

    switch(index) {
        case 1:
            return (
                <FlatDetails
                    nextIndex={nextIndex}
                    flatDetails={flatDetails}
                    setFlatDetails={setFlatDetails}
                    gotoIndex={gotoIndex}
                />
            )
        case 2: 
            return (
                <ApplicantDetails
                    prevIndex={prevIndex}
                    nextIndex={nextIndex}
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