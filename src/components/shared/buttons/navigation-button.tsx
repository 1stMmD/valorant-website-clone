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
    group
    flex
    items-center
    justify-between
    uppercase
    font-bold
    w-fit
    gap-x-3
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
        transition-transform
        duration-500
        w-[22px]
        group-hover:translate-x-[8px]
        '
        stroke='stroke-blue-500'
        />
    </a>
  )
}

export default NavigationButton