import './desktop.css'

const defaultTitle = "ARCTIC MONKEYS";
function Header ({title})  {
    
    return (
        <>
            <div className='main-container'>
                <header>
                    <div>
                        <h1 className='hero-text'>{title = defaultTitle}</h1>
                    </div>
                    <div className='year-disk'>
                        <div className='year'>
                            <h1>2002</h1>
                        </div>
                        <div className='disk-box'>
                            <div className='disk-row'>
                                <div className='disk one'></div>
                                <div className='disk two'></div>
                                <div className='disk three'></div>
                            </div>
                            <div className='disk-row'>
                                <div className='disk four'></div>
                                <div className='disk five'></div>
                                <div className='disk six'></div>
                            </div>
                            <div className='disk-row'>
                                <div className='disk seven'></div>
                                <div className='disk eight '></div>
                                <div className='disk nine'></div>
                            </div>
                        </div>
                    </div>
                </header>

                <hr />

            </div>

        </>
    )
}

export default Header