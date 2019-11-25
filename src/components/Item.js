import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ image }) => {
    const { id, url } = image;
    return (
        <div>
            <img width="200" src={url} alt={`car-${id}`} />
        </div>
    );
};

Item.propTypes = {
    image: PropTypes.object.isRequired
};

export default Item;
