import React from 'react';
import TextInput from '../UIKit/TextInput';
import Icon from '../UIKit/Icon';

import { Grid } from '../UIKit/Grid';

const SearchBar = ({ handleFilter }) => (
  <Grid
    cols='2'
    padding='20px'
    bgColor='#ffffff'
  >
    <TextInput
      type='text'
      color='#78909c'
      handleFilter={handleFilter}
      placeholder='Type to search...'
      iconLeft={<Icon name="search" size="14" color='#78909c' />}
    />
  </Grid>
)

export default SearchBar;