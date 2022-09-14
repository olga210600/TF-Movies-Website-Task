import React from 'react';
import Navigation from "../RouterNavigation";
import {IPageHeader} from "./type";

const PageHeader: React.FC<IPageHeader> = ({setAddModalActive, handleCategoryChange}) => {
    return (
        <Navigation setAddModalActive={setAddModalActive} handleCategoryChange={handleCategoryChange}/>
    );
};

export default PageHeader;