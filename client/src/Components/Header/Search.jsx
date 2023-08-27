import styled from "@emotion/styled";
import { Box, InputBase, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import {useSelector, useDispatch} from 'react-redux';
import { getProductDetails, getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";



const SearchContainer = styled(Box)`
  background-color: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  width: 100%;
  padding-left: 20px;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
   position: absolute;
   background: #ffffff;
   color: #000;
   margin-top: 36px;
`;

function Search() {
  const [text, setText] = useState('');
  const getText = (text)=>{
    setText(text);
  }

  const {products}= useSelector(state => state.getProducts);
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getProducts);
  },[dispatch])
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more" 
      onChange={(e)=> {getText(e.target.value)}}
      value={text}
      />
      <SearchIconWrapper>
        <SearchOutlined />
      </SearchIconWrapper>
      {
        text && 
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link to= {`products/${product.id}`}
                onClick={()=> {setText('')}}
                style={{textDecoration:'none', color: 'inherit'}}
                >
                {product.title.longTitle}
                </Link>
                
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SearchContainer>
  );
}

export default Search;
