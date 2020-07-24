import React from 'react'
import {
  StarRate,
  People,
  DirectionsBoat,
  TableChart,
} from '@material-ui/icons'

import {
  Tr,
  TdLeft,
  TdRight,
  PhotoContainer,
  InnerTr,
  InnerTdLeft,
  InnerTdRight,
  H2,
  H4,
  H5,
  H6,
  Button,
  Regular,
  IconAndTextContainer,
} from './elements'

const ListItem = ({ item, length, year }) => {
  let itemType = item.type
  if (item.type.indexOf('_') > 0) {
    itemType = item.type.split('_').join(' ')
  }
  if (
    item.length >= length[0] &&
    item.length <= length[1] &&
    item.year >= year[0] &&
    item.year <= year[1]
  )
    return (
      <Tr>
        <TdLeft>
          <PhotoContainer imageUrl={item.imageUrl} />
        </TdLeft>
        <TdRight>
          <InnerTr>
            <InnerTdLeft>
              <H2>
                {itemType.slice(0, 1) +
                  itemType.slice(1, itemType.length).toLowerCase()}{' '}
                {item.name} ({item.year})
              </H2>
              <IconAndTextContainer>
                {item.reviews.score} <StarRate /> <H5>Read Reviews</H5>
              </IconAndTextContainer>
              <br />
              <IconAndTextContainer>
                <DirectionsBoat />
                <Regular>
                  Skipper:{' '}
                  {item.skipper.slice(0, 1) +
                    item.skipper
                      .slice(1, item.skipper.length)
                      .toLowerCase()}{' '}
                </Regular>
              </IconAndTextContainer>
              <IconAndTextContainer>
                <TableChart /> <Regular>Cabins: {item.cabins}</Regular>
              </IconAndTextContainer>
              <IconAndTextContainer>
                <People /> <Regular> Guests: {item.guests}</Regular>
              </IconAndTextContainer>
            </InnerTdLeft>
            <InnerTdRight>
              <H2>€{item.price}/Day</H2>
              <H4>{item.marina}</H4>
              <Regular>Length: {item.length}m</Regular>
              <H6>Instant booking</H6>
              <br />
              <Button onClick={() => {}}>View Details ></Button>
            </InnerTdRight>
          </InnerTr>
        </TdRight>
      </Tr>
    )
  else return <></>
}
export default ListItem
