import React, { useState } from 'react'

import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'
import { AppContainer, TableContainer, Table, SearchBar } from './elements'
import { Typography, Slider } from '@material-ui/core'

import ListItem from '../ListItem'

const client = new ApolloClient({
  uri: 'https://sls-sandbox.zizoo.com/graphql',
})

const BoatList = () => {
  const [items, setItems] = useState([])
  const [length, setLength] = useState([7, 25])
  const [year, setYear] = useState([2004, 2016])
  const handleLengthChange = (event, newValue) => {
    setLength(newValue)
  }
  const handleYearChange = (event, newValue) => {
    setYear(newValue)
  }
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <TableContainer>
          <Query
            query={gql`
              {
                getBoats(input: { active: true }) {
                  name
                  reviews {
                    total
                    score
                  }
                  skipper
                  cabins
                  guests
                  type
                  price
                  imageUrl
                  length
                  country
                  marina
                  year
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error</p>
              else setItems(data.getBoats)
              return (
                <>
                  <SearchBar>
                    <Typography id='range-slider' gutterBottom>
                      Filter by length: {length[0]}-{length[1]}m
                    </Typography>
                    <Slider
                      min={2}
                      max={30}
                      value={length}
                      onChange={handleLengthChange}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                    />
                    <Typography id='range-slider' gutterBottom>
                      Filter by year: {year[0]}-{year[1]}
                    </Typography>
                    <Slider
                      min={2000}
                      max={2020}
                      value={year}
                      onChange={handleYearChange}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                    />
                  </SearchBar>
                  <Table>
                    <tbody>
                      {items.map((item) => (
                        <div>
                          <ListItem
                            key={item.id}
                            item={item}
                            length={length}
                            year={year}
                          />
                        </div>
                      ))}
                    </tbody>
                  </Table>
                </>
              )
            }}
          </Query>
        </TableContainer>
      </AppContainer>
    </ApolloProvider>
  )
}

export default BoatList
