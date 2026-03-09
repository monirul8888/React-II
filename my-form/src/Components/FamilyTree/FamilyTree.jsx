import React, { createContext } from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';
import "./FamilyTree.css"
import GrandPa from './GrandPa';

export const AssetContext = createContext("");

const FamilyTree = () => {
    const asset = "Diamond";
    const newAsset = "Gold";
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <AssetContext.Provider value= {newAsset}>
                <GrandPa asset = {asset}></GrandPa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;