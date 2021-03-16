import React from 'react';
import { Favourite, FavouriteRed } from '../imageMapping';
import { useTvShowHook } from './Hooks/useTvShow.hook';


const TvShows = () => {

    const { search, setSearch, setIsFav, isFav, getShows, showItems, addToFav } = useTvShowHook();

    return (<div className='col-flex'>
        <nav className="navbar navbar-expand-lg navbar-light default-color">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Involvio Tv shows app</a>
                <div className="" id="navbarSupportedContent">
                    <div className="d-flex">
                        <input id='searchElem' className="form-control me-2" placeholder="type to search"
                            value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search" />
                        <button className={`btn btn-outline-success ${search ? 'active-search' : ''}`} onClick={getShows} >Search</button>
                    </div>
                </div>
            </div>
        </nav>
        <div className='row-flex p-4'>
            <div className={`chips ${!isFav ? 'active-chips' : ''} `} onClick={() => setIsFav(false)} >
                <span >All  </span>
            </div>
            <div className={`chips ${isFav ? 'active-chips' : ''}`} onClick={() => setIsFav(true)} >
                <span >Favourites</span>
            </div>
        </div>

        <div className='row-flex flex-wrap' >
            {
                showItems.length ?
                    showItems.map((item, index) => {
                        const { show, isFavourite = false } = item || {};
                        const { id, image, rating, name = '', officialSite = 'dsad', summary } = show || {};
                        const average = rating && rating.average ? rating.average : 'NA'
                        const { medium = 'https://jtride-uat-data.s3.ap-south-1.amazonaws.com/public/0.3111172231906917.png' } = image || {}
                        return (
                            <div key={id} className="card m-4" style={{ width: '18rem' }}>
                                <img src={medium} className="card-img-top" alt={officialSite} />
                                <div className='card-body'>
                                    <div className='row-flex w-full justify-between '>
                                        <span className='text-left' >{name}</span>
                                        <img style={{ width: '24px' }} onClick={() => addToFav(id)} src={isFavourite ? FavouriteRed() : Favourite()} alt={isFavourite ? 'fav' : 'No fav'} />
                                    </div>
                                    <div className='row-flex w-full justify-between'>
                                        <span className='description' >Average Rating : {average}</span>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                    : <div className='text-center col-flex p-4'> No data found </div>
            }
        </div>
    </div>)

}
export default TvShows;