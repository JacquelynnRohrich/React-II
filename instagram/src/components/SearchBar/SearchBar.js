import React from 'react';
import PostContainer from './PostContainer';
import CommentSection from './CommentSection';
import DummyData from './DummyData';

const SearchBar = () => {
    <div class="parent-component">
    {DummyData.map((datum, i) => <PostContainer key={i} data={datum} /> )}
    </div>
    };
    export default SearchBar;
export default SearchBar;