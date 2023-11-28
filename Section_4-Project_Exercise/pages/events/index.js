import React from "react"
import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/events/EventList"
import EventsSearch from "../../components/events/EventsSearch"

export default function EventsPage() {
  const events = getAllEvents()
  return (
    <div>
      <h1>EventsPage</h1>
      <EventsSearch />
      <EventList items={events} />
    </div>
  )
}
