export const getMockData = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/Koulinn/next-course/main/Section_4-Project_Exercise/dummy-events.json"
    )
    const data = (await res.json()) || []
    return {
      status: "success",
      data,
    }
  } catch (error) {
    console.log(error)
    return {
      status: "failed",
      data: [],
      errorMsg: error.message,
    }
  }
}
