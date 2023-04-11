type props = {
  children : React.ReactNode
}

const H2 = ({
  children
} : props) => {
  return (
    <h2
    className="
    text-inherit
    text-[55px]
    md:text-[100px]
    lg:text-[120px]
    leading-none
    tracking-[1px]
    font-Tungsten        
    ">
      {children}
    </h2>
  )
}

export default H2