import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';
import "./FamilyTree.css"
import GrandPa from './GrandPa';

const FamilyTree = () => {
    const asset = "Diamond";
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <GrandPa></GrandPa>
        </div>
    );
};

export default FamilyTree;