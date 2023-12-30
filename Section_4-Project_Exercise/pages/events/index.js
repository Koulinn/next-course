import React from "react"
import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/events/EventList"
import EventsSearch from "../../components/events/EventsSearch"
import { useRouter } from "next/router"
import { getMockData } from "../../utils"

import Head from "next/head"

export default function EventsPage(props) {
  // const events = getAllEvents()
  const router = useRouter()

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <div>
      <Head>
        <title>Events Page</title>
        <description>Add value to SEO optimizations</description>
      </Head>
      <h1>EventsPage</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </div>
  )
}

// server side

export async function getStaticProps(props) {
  const { data } = await getMockData()

  return {
    props: {
      events: data,
    },
    revalidate: 60,
  }
}
