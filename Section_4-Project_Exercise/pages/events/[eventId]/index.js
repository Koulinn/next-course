import React from "react"
import { useRouter } from "next/router"
import { getEventById } from "../../../dummy-data"
import EventSummary from "../../../components/event-detail/event-summary"
import EventLogistics from "../../../components/event-detail/event-logistics"
import EventContent from "../../../components/event-detail/event-content"
import { getMockData } from "../../../utils"
import Head from "next/head"

export default function EventDetailPage(props) {
  // const router = useRouter()

  // const eventId = router.query.eventId
  // const event = getEventById(eventId)
  const event = props.event

  if (!event) {
    return <p>No event found</p>
  }
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <description>{event.description}</description>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

//get static props

// You can think of featured, future, selected items not all of them, like items with discount, most visited etc..
export async function getStaticProps(context) {
  const { params } = context
  const { eventId } = params

  const { data } = await getMockData()
  const loadedEvent = data.find((event) => event.id === eventId)

  if (!loadedEvent) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      event: loadedEvent,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const { data } = await getMockData()
  console.log(data, "data")
  const ids = data.map((event) => event.id)
  const params = ids.map((id) => ({ params: { eventId: id } }))
  return {
    paths: params,
    // fallback is for pages we don't want to pre generated pages. Only for pages that aren't highly accessed.
    // true will try to load the page
    fallback: true,
  }
}
