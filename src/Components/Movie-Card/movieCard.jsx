import React from 'react';
import { Favourite, FavouriteRed } from '../../imageMapping';


const MovieCard = ({ id, image_url, officialSite, name, average, addToFav, isFavourite }) => {
    return (
        <div className="card m-4" data-testid='movie_card' style={{ width: '18rem' }}>
            <img src={image_url} className="card-img-top" alt={officialSite || 'tvamz'} />
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

}
export default MovieCard;