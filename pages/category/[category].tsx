import React from "react";
import { GetServerSideProps } from 'next'

type myReactComponent = {
  joke: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${context.params?.category}`)
  const joke = await response.json();

  console.log(joke);

  return {
    props: {
      joke: joke.value,
    },
  }
}

const RandomChuckNorrisJoke: React.FC<myReactComponent> = ({joke}) => {
  return (
    <>
    {joke}
    </>
  )
}

export default RandomChuckNorrisJoke
