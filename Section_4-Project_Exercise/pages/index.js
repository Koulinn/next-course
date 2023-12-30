import React from "react"
import { getAllEvents } from "../dummy-data"
import { getMockData } from "../utils"
import EventList from "../components/events/EventList"
import Head from "next/head"

export default function HomePage(props) {
  //const events = getAllEvents()
  const events = props.events
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Add value to SEO optimizations" />
      </Head>
      <h1>Home Page</h1>
      <EventList items={events} />
    </div>
  )
}
export async function getStaticProps(contex) {
  const { data, status } = await getMockData()

  return {
    props: {
      events: data || [],
      revalidate: 60,
    },
  }
}
