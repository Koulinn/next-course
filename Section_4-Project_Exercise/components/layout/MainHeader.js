import Link from "next/link"
import React from "react"

import classes from "./mainHeader.module.css"

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>Next Events</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>All events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
