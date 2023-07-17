import React from 'react';

function Join(props) {
    const [joinModalOpen, setJoinModalOpen] = useState(false);

    const handleOpenJoinModal = () => {
        setJoinModalOpen(true);
    };

    const handleCloseJoinModal = () => {
        setJoinModalOpen(false);
    };
    
    return (
        <div>

        </div>
    );
}

export default Join;