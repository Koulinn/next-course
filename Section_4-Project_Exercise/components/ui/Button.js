import Link from "next/link"
import React from "react"
import classes from "./button.module.css"

export default function Button(props) {
  return (
    <Link href={props.link} legacyBehavior className={classes.btn}>
      <a>{props.children}</a>
    </Link>
  )
}
