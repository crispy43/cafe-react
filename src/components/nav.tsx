
interface Props {
  navigation: {
    name: string;
    href: string;
  }[]
}

const Nav = ({ navigation }: Props) => {
  return (
    <nav>
      <ul>
        {
          navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav;