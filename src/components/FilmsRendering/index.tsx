import React from 'react';
import PaginationList from 'react-pagination-list';
import Navigation from "../../components/RouterNavigation";
import Post from "../../components/Post";
import {IFilmsRendering} from './type';
import {
    Wrapper,
    FilmsWrapper
} from './style';

const FilmsRendering:React.FC<IFilmsRendering> = ({movies}) => {

    return (
        <Wrapper>
            <Navigation handleCategoryChange={undefined} setAddModalActive={undefined}/>

            <FilmsWrapper>
                <FilmsWrapper>
                    <PaginationList
                        data={movies}
                        pageSize={8}
                        layout={"row"}
                        renderItem={(item, index) => (
                            <Post filmId={item.id} key={index} movie={item}/>
                        )}
                    />
                </FilmsWrapper>
            </FilmsWrapper>
        </Wrapper>
    );
};

export default FilmsRendering;