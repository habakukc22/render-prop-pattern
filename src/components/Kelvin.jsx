function Kelvin({ value }) {
  return <div>{parseInt(value || 0) + 273.15}K</div>;
}

export default Kelvin;
