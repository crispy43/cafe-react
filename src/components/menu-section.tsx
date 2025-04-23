export interface Props {
  menu: {
    name: string;
    price: string;
  }[]
}

const MenuSection = ({ menu }: Props) => {
  return (
    <section id="menu">
      <h2>메뉴</h2>
      <table>
        <tr>
          <th>메뉴</th>
          <th>가격</th>
        </tr>
        {menu.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </table>
    </section>
  );
}

export default MenuSection;