import React from "react"
import { getAllEvents } from "../dummy-data"
import EventList from "../components/events/EventList"

export default function HomePage() {
  const events = getAllEvents()
  return (
    <div>
      <h1>Home Page</h1>
      <EventList items={events} />
    </div>
  )
}
