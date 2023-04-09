import ArrowRight from '../../svg/arrow-right'

type props = {
    url : string,
    title : string
}

const NavigationButton = ({
    url,
    title
} : props) => {
  return (
    <a
    href={url}
    className='
    duration-500
    transition-all
    flex
    items-center
    justify-between
    uppercase
    font-bold
    w-fit
    gap-x-3
    hover:gap-x-5
    '>
        <span
        className='
        text-blue-500
        text-[.9rem]
        font-DINNext
        '>
            {title}
        </span>
        <ArrowRight
        className='
        w-[22px]
        '
        stroke='stroke-blue-500'
        />
    </a>
  )
}

export default NavigationButton