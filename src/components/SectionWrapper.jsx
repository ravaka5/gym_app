import PropTypes from 'prop-types'

export default function SectionWrapper(props) {
    let {children,header,title,id} = props
  return (
    <section id={id} className='min-h-screen flex flex-col gap-10'>
        <div className='bg-slate-950 py-10 p-4 flex flex-col gap-2 justify-center items-center'>
            <p className='uppercase font-medium'>{header}</p>
            <h2 className='font-semi-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]}
            <span className='uppercase text-blue-400'>{title[1]}</span>
            {title[2]}</h2>
        </div>
        <div className='max-w-[800px] w-full mx-auto flex flex-col gap-10 p-4'>
          {children}
        </div>
    </section>
  )
}

SectionWrapper.propTypes = {
    children : PropTypes.node,
    header: PropTypes.string,
    title: PropTypes.array,
    id:PropTypes.string
}
