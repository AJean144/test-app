import React from 'react';
import Icon from '../UIKit/Icon';

import {Grid, GridItem} from '../UIKit/Grid';

const Header = ({numberOfBeers, handleSort, toggleSort}) => (
  <Grid cols='10' padding='20px 20px 0 20px' bgColor='#f4f8f9'>
    <GridItem 
      fontSize='2rem' 
      fontColor='#7460ee' 
      fontWeight='300'
    >
      Beers
    </GridItem>

    <GridItem 
      fontColor='#8298a3' 
      fontWeight='300' 
      alignSelf='center'
    >
      <Icon 
        name='caretUp' 
        transform='rotate(0.5turn)' 
        size='15' 
        padding='0 0 0 10px' 
      /> 
      {`${numberOfBeers} Total`}
    </GridItem>

    <GridItem 
      fontColor='#8298a3' 
      fontWeight='300' 
      alignSelf='center' 
      gridCol='2'
    >
      <span style={{cursor: 'pointer'}} onClick={handleSort}>
        Sort by: <span style={{color: '#263238'}}>Beer Name</span>
        <Icon 
          name='caretUp' 
          transform={toggleSort ? 'rotate(0turn)' : 'rotate(0.5turn)'}
          size='15' 
          padding='0 5px 0 0'
        />
      </span>
    </GridItem>

    <GridItem 
      fontColor='#8298a3' 
      fontWeight='300' 
      alignSelf='center' 
      justifySelf='end' 
      gridCol='3 / -1'
    >
      <button style={{
                background: '#ffffff', 
                marginRight: 5,
                border: 'none', 
                padding: '10px', 
                textAlign: 'center', 
                borderRadius: 5, 
                color: '#8298a3', 
                fontWeight: '300'
              }}>
        <Icon 
          name='evenOdd' 
          size='15' 
          padding='0 5px 0 0'
        />
      </button>
      <button style={{
                background: '#ffffff', 
                marginRight: 5,
                border: 'none', 
                padding: '10px', 
                textAlign: 'center', 
                borderRadius: 5, 
                color: '#8298a3', 
                fontWeight: '300'
              }}>
        Filter
        <Icon 
          name='filter' 
          padding='0 0 0 5px'
        />
      </button>
      <button style={{
                background: '#27a9f8', 
                marginRight: 5,
                border: 'none', 
                padding: '10px', 
                textAlign: 'center', 
                borderRadius: 5, 
                color: '#ffffff', 
                fontWeight: '300'
              }}>
        Add Beer
      </button>
      <button style={{
                background: '#ddeff9', 
                border: 'none', 
                padding: '10px', 
                textAlign: 'center', 
                borderRadius: 5, 
                color: '#11a0f8', 
                fontWeight: 'bold'
              }}>
            <Icon 
              name='more' 
              color='#11a0f8'
            /> 
      </button>
    </GridItem>
  </Grid>
)

export default Header;