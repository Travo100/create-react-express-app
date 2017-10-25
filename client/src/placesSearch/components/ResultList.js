import React from 'react';

// component for rendering a place
import ResultItemContainer from '../containers/ResultItemContainer';

// Returns a ResultItemContainer component
function createResultItemContainer ( place ) {
    return <ResultItemContainer key={place.placeId} place={place} />;
}

export default function ResultList ( { places } ) {
    return (
        <ul style={{ 'textAlign': 'left' }}>
            {places ? places.map( createResultItemContainer ) : ''}
        </ul>
    );
};
