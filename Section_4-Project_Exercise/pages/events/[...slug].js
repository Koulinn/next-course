import { useRouter } from "next/router"
import React from "react"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/EventList"

export default function FilteredEventsPage() {
  const router = useRouter()

  const filterData = router.query.slug

  if (!filterData) {
    return <p className="center">Loading</p>
  }

  const filterYear = filterData[0]
  const filterMonth = filterData[1]
  const numYear = +filterYear
  const numMonth = +filterMonth

  if (isNaN(numYear) || isNaN(numMonth)) {
    return <p>Invalid filter</p>
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

  if (!filteredEvents || !filteredEvents.length) {
    return <p>No events founds.</p>
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  )
}
