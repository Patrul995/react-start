function ServicesItem({ headerName, text, price}) {
  //   let headerName = 'Lorem ipsum dolor sit amet. let'
  //   let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,suscipit!'
  return (
    <li>
      <h4>{headerName}</h4>
      <p>{text}</p>
      <p>{price}</p>
    </li>
  );
}

export default ServicesItem;
