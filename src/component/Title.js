import React from 'react';

const Title = () => {
    console.log('Title component')
    return (
        <div>
            <h1>useCallback hookによる最適化</h1>
        </div>
    );
};

export default React.memo(Title);