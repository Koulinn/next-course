import Link from "next/link"
import React from "react"
import classes from "./button.module.css"

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} legacyBehavior>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    )
  } else {
    return <button>{props.children}</button>
  }
}
