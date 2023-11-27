import { useRouter } from "next/router"
import React from "react"

export default function BlogPostsPage() {
  const router = useRouter()
  console.log(router.query, "from blogPosts page")
  return (
    <div>
      <h1>The Blog Post page</h1>
    </div>
  )
}
