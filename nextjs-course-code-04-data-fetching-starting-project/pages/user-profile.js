import React from "react"

const UserProfilePAge = (props) => {
  return <div>{props.username}</div>
}

export default UserProfilePAge

// In this case context has access to the full request object
// for scenarios where data is constantly updated, like medical care, dashboards
export async function getServerSideProps(context) {
  const { params, req, res } = context

  return {
    props: {
      username: "Rafa",
    },
  }
}
