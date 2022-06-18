import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  font-size: 16px;
  background: rgb(57, 57, 57);
  border-radius: 5px;
  height: 80px;

  img {
    border-radius: 5px 0 0 5px;
    height: 80px;
    width: 80px;
  }
  > div {
    padding: 5px;
  }

  @media screen and (max-height: 568px) {
    font-size: 14px;
    height: 60px;

    img {
      height: 60px;
      width: 60px;
    }
  }
`

export default function Card({
  image, text
}) {
  return (
    <CardContainer>
      {image && <img src={image} alt={text} />}
      {typeof text === 'string' ? (
        <div>
          <span>{text}</span>
        </div>
      ) : (
        <div>{text}</div>
      )}
    </CardContainer>
  )
}
