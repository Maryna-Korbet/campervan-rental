import React, { useState } from 'react';

export const AdvertsFilter = ({ onSearch }) => {
    const [filterText, setFilterText] = useState('');
    const [selectedEquipment, setSelectedEquipment] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [selectedTransmission, setSelectedTransmission] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
            filterText,
            selectedEquipment,
            selectedType,
            selectedTransmission
        });
    };

    const toggleEquipment = (equipment) => {
        if (selectedEquipment.includes(equipment)) {
            setSelectedEquipment(selectedEquipment.filter((item) => item !== equipment));
        } else {
            setSelectedEquipment([...selectedEquipment, equipment]);
        }
    };

    const toggleTransmission = (transmission) => {
        setSelectedTransmission(transmission === selectedTransmission ? '' : transmission);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Search by location"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedEquipment.includes('airConditioner')}
                        onChange={() => toggleEquipment('airConditioner')}
                    />
                    Air Conditioner
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedTransmission === 'automatic'}
                        onChange={() => toggleTransmission('automatic')}
                    />
                    Transmission
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedEquipment.includes('kitchen')}
                        onChange={() => toggleEquipment('kitchen')}
                    />
                    Kitchen
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedEquipment.includes('TV')}
                        onChange={() => toggleEquipment('TV')}
                    />
                    TV
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedEquipment.includes('shower')}
                        onChange={() => toggleEquipment('shower')}
                    />
                    Shower
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="alcove"
                        checked={selectedType === 'alcove'}
                        onChange={() => setSelectedType('alcove')}
                    />
                    Alcove
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="fullyIntegrated"
                        checked={selectedType === 'fullyIntegrated'}
                        onChange={() => setSelectedType('fullyIntegrated')}
                    />
                    Fully Integrated
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="panelTruck"
                        checked={selectedType === 'panelTruck'}
                        onChange={() => setSelectedType('panelTruck')}
                    />
                    Panel Truck
                </label>
            </div>
            <button type="submit">Search</button>
        </form>
    );
};