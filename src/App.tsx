import Main from "./components/ main";
import Header from "./components/header";
import Nav from "./components/nav"

const navigation = [
  { name: "카페 소개", href: "#intro" },
  { name: "메뉴", href: "#menu" },
  { name: "갤러리", href: "#gallery" },
  { name: "문의하기", href: "#contact" },
];

const menu = [
  { name: '아메리카노', price: '₩3,000' },
  { name: '카페라떼', price: '₩4,500' },
]

const images = [
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: '커피-1' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: '커피-2' },
  { src: 'https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: '커피-3' },
];

function App() {
  return (
    <>
      <Nav navigation={navigation} />
      <Header />
      <Main
        menu={menu}
        images={images}
      />
    </>
  )
}

export default App
