import ServicesItem from "./ServicesItem";

function Services() {
  let oranges = {
    headerName: "Orange",
    price: 120,
    text: "Oranges are vibrant, juicy fruits known for their sweet and slightly tangy flavor, packed with vitamin C and antioxidants.",
  };

  let applles = {
    headerName: "Apple",
    price: 120,
    text: "Apples are one of the world’s most popular and versatile fruits",
  };

  let pineapples = {
    headerName: "Pineapple",
    price: 120,
    text: "Pineapples are tropical fruits known for their distinctive appearance and sweet",
  };

  let cucumbers = {
    headerName: "Cucumber",
    price: 120,
    text: "Cucumbers are crisp, refreshing vegetables commonly enjoyed raw in salads",
  };

  let bananas = {
    headerName: "Banana",
    price: 120,
    text: "Bananas are one of the world’s most popular fruits, known for their natural sweetness",
  };

  let cherries = {
    headerName: "Cherries",
    price: 120,
    text: "Cherries are small, round fruits with a juicy, sweet, or tart flavor, enjoyed fresh",
  };

  return (
    <section className="services">
      <h3>Services</h3>
      <ul>
        <ServicesItem
          price={oranges.price}
          headerName={oranges.headerName}
          text={oranges.text}
        />
        <ServicesItem
          price={applles.price}
          headerName={applles.headerName}
          text={applles.text}
        />
        <ServicesItem
          price={cucumbers.price}
          headerName={cucumbers.headerName}
          text={cucumbers.text}
        />
        <ServicesItem
          price={cherries.price}
          headerName={cherries.headerName}
          text={cherries.text}
        />
        <ServicesItem
          price={bananas.price}
          headerName={bananas.headerName}
          text={bananas.text}
        />
        <ServicesItem
          price={pineapples.price}
          headerName={pineapples.headerName}
          text={pineapples.text}
        />
      </ul>
    </section>
  );
}

export default Services;
