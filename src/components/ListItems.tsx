import * as React from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import './ListItems.scss';

import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { useDispatch, useSelector } from "react-redux";

import { fetchItems } from "../state/action-creators";

import { IconButton, Typography } from "@material-ui/core";
import { FavoriteBorderOutlined, FavoriteOutlined, ArrowDownwardRounded, ArrowUpwardRounded } from "@material-ui/icons";

const ListItems = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { items, loadedItems } = useSelector((state: State) => state.itemsReducer)

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>List Items</div>
  )
}

export default ListItems;
