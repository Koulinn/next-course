import { useRouter } from "next/router"
import React from "react"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/EventList"

export default function FilteredEventsPage(props) {
  if (props?.isLoading) {
    return <p className="center">Loading</p>
  }

  if (props.hasError) {
    return <p>Invalid filter</p>
  }

  // const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })
  const filteredEvents = props.filteredEvents
  if (!filteredEvents || !filteredEvents.length) {
    return <p>No events founds.</p>
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  )
}

//This page also could be a client side page.
export async function getServerSideProps(context) {
  const { params } = context
  const filterData = params.slug

  if (!filterData) {
    return { isLoading: true }
  }

  const filterYear = filterData[0]
  const filterMonth = filterData[1]
  const numYear = +filterYear
  const numMonth = +filterMonth

  if (isNaN(numYear) || isNaN(numMonth)) {
    return { hasError: true }
  }
  console.log(numMonth, "numMonth")
  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  })
  console.log(filteredEvents, "filteredEvents ")
  return {
    props: {
      filteredEvents,
    },
  }
}
