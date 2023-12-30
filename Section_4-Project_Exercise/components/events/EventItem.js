import Link from "next/link"
import React from "react"

import classes from "./eventItem.module.css"
import Button from "../ui/Button"

import AddressIcon from "../icons/address-icon"
import DateIcon from "../icons/date-icon"
import ArrowRight from "../icons/arrow-right-icon"
import Image from "next/image"

export default function EventItem(props) {
  const { title, image, date, location, id } = props

  const displayedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const formattedAddress = location.replace(", ", "\n")

  const exploreLink = `/events/${id}`

  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} width={250} height={160}></Image>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{displayedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.arrow}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}
