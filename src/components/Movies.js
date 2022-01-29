import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IMG_API } from '../TMDBAPI';
import { Link } from 'react-router-dom';

const Movies = (movie) => {
    console.log(movie.info);

    return (
        <Container>
            <Content>
                <Wrap>
                    <Link to={`/detail/${movie.info.id}`}>
                        <img src={IMG_API + movie.info.poster_path} />
                    </Link>
                </Wrap>
            </Content>
        </Container >
    );
}

export default Movies

const Container = styled.div`
`;

const Content = styled.div`

`;

const Wrap = styled.div`
    border-radius: 10px;
    overflow:hidden;
    cursor: pointer;
    border: 3px solid rgba(249,249,249, 0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.90);
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249,249,249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`;