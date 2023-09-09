import React from 'react';

const GameMatrix = () => {
    const rowCount = 6;
    const colCount = 6;

    const generateMatrix = () => {
        const matrix = [];
        for (let row = 0; row < rowCount; row++) {
            const rowCells = [];
            for (let col = 0; col < colCount; col++) {
                const cellValue = row * colCount + col + 1;
                rowCells.push(
                    <div
                        key={cellValue}
                        className="bg-[#FCD731] border border-gray-500 p-6"
                    >
                       
                    </div>
                );
            }
            matrix.push(
                <div key={row} className="flex justify-center">
                    {rowCells}
                </div>
            );
        }
        return matrix;
    };

    return (
        <div className="container mx-auto mt-5 mb-5">
            {generateMatrix()}
        </div>
    );
};

export default GameMatrix;
