import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchBeers } from '../../../actions/beerActions';

import { StyledTable, TH, TR, TD } from './styled/StyledTable';
import { Grid } from '../Grid';
import { capitalize, getInitials } from '../../../lib/styleUtils';

import SearchBar from '../../SearchBar';
import Header from '../../Header';


class Table extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      fetching: false,
      fetched: false,
      toggleSort: false,
      beers: [],
      initialBeers: [],
      error: null
    }

    this.handleFilter = this.handleFilter.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.props.fetchBeers()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.fetched !== prevState.fetched) {
      return {
        fetched: nextProps.fetched
      }
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.fetched !== this.props.fetched) {
      this.setState({
        beers: this.props.beers.data,
        initialBeers: this.props.beers.data
      });
    }
  }

  // Filter all beers by name
  handleFilter(event) {
    let filteredBeers = this.state.initialBeers;
    filteredBeers = filteredBeers.filter((beer) => {
      return beer.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ beers: filteredBeers });
  }

  // Sort all Beers by name
  handleSort() {
    let sortedBeers = this.state.beers;

    sortedBeers = sortedBeers.sort((a, b) => {
      let beerNameA = a.name.toLowerCase();
      let beerNameB = b.name.toLowerCase();
      if (this.state.toggleSort) {
        if (beerNameA > beerNameB) {
          return -1;
        }
        if (beerNameA < beerNameB) {
          return 1;
        }

        return 0;
      } else {

        if (beerNameA < beerNameB) {
          return -1;
        }
        if (beerNameA > beerNameB) {
          return 1;
        }

        return 0;
      }
    });

    this.setState({
      users: sortedBeers,
      toggleSort: !this.state.toggleSort
    });
  }

  render() {
    const { beers } = this.state;
    return (
      <Fragment>
        <SearchBar handleFilter={this.handleFilter} />
        <Header
          numberOfBeers={beers.length}
          handleSort={this.handleSort}
          toggleSort={this.state.toggleSort}
        />
        <Grid padding='20px' bgColor='#f4f8f9'>
          <StyledTable cellSpacing="0" cellPadding="0">
            <TR color='#8399a4' height="20">
              <TH textAlign='left' padding='20px'>Basic Info</TH>
              <TH textAlign='left' padding='20px'>Tag Line </TH>
              <TH textAlign='left' padding='20px'>Attenuation Level</TH>
              <TH textAlign='left' padding='20px'>Brewers Tips</TH>
              <TH textAlign='left' padding='20px'>First Brewed</TH>
            </TR>

            {beers.map((beer) => (
              <TR key={beer.id} bgColor='#ffffff' hoverable>
                <TD>
                  <Grid
                    cols='55px 300px'
                    justifyItems='start'
                    alignItems='center'
                  >
                    {
                      beer.image_url &&
                      <img src={beer.image_url} alt="Beer" style={{ width: 40, height: 80 }} />
                    }

                    {
                      !beer.image_url &&
                      <div style={{ borderRadius: '100%', background: '#BADA55', padding: 10, color: '#FFFFFF' }}>
                        {getInitials(`${beer.name} ${beer.contributed_by}`)}
                      </div>
                    }
                    <Grid
                      rows='2, 20px'
                      justifyItems='start'
                      alignItems='start'
                    >
                      <div style={{ color: '#263238' }}>{capitalize(`${beer.name}`)}</div>
                      <div style={{ color: '#8399a4', fontSize: '0.8rem' }}>{beer.contributed_by}</div>
                    </Grid>
                  </Grid>
                </TD>

                <TD>{beer.tagline}</TD>
                <TD>{beer.attenuation_level}</TD>
                <TD>{beer.brewers_tips}</TD>
                <TD>{beer.first_brewed}</TD>
              </TR>
            ))}

          </StyledTable>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  fetching: state.beers.fetching,
  fetched: state.beers.fetched,
  beers: state.beers.beers,
  error: state.beers.error
})

export default connect(mapStateToProps, { fetchBeers })(Table);