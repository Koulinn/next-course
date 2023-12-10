function HomePage(props) {
  console.log(props)
  return (
    <ul>
      {props.products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  console.log("Inside getStaticProps")
  return {
    props: {
      products: [{ id: 1, title: "Product 1" }],
    },
  }
}

export default HomePage
