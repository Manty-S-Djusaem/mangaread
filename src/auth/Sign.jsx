import React from 'react';

function Sign(props) {
    const [signModalOpen, setSignModalOpen] = useState(false);

    const handleOpenSignModal = () => {
        setSignModalOpen(true);
    };

    const handleCloseSignModal = () => {
        setSignModalOpen(false);
    };

    return (
        <div>
            
        </div>
    );
}

export default Sign;