import React from "react"
import EventItem from "./EventItem"

import classes from './eventList.module.css'

export default function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  )
}
