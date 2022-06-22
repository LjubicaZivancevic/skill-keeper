import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { doSearch } from '../actions/skills.actions';

function Searchbar() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("")

 
    useEffect(() => {
        dispatch(doSearch(searchTerm));
      }, [searchTerm]);

    return (
        <>
        <Form>
          <Form.Field>
            <input
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search..."
              className="SearchBar"
              icon="search"
            />
          </Form.Field>
        </Form>
      </>
    )
}

export default Searchbar
