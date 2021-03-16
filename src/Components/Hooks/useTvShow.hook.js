
import { useEffect, useState } from 'react';

import { SearchShows } from '../../Utils/http.util';

export function useTvShowHook() {

    const [shows, setShowList] = useState({ original: [], filtered: [] });

    const [search, setSearch] = useState('arrrow');// arrow is default search term here

    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        getShows();
    }, []);

    /* Method to call a list of items */
    const getShows = async () => {
        if (search == '') {
            alert('Please enter search keyword');
            return;
        }
        const result = await SearchShows(search) || [];
        if (result.length) {
            setShowList({ original: result, filtered: [] });
            setIsFav(false)
        } else {
            setShowList({ original: [], filtered: [] });
            setIsFav(false)
        }
    }

    /* Method add mark a show as Favourite */
    const addToFav = (id) => {
        const newlist = [...shows.original];
        const index = newlist.findIndex(item => item.show.id == id)
        newlist[index].isFavourite = !newlist[index].isFavourite;
        const fav = newlist.filter(item => item.isFavourite);
        setShowList({ original: newlist, filtered: fav });
    }

    /* Display all or only favourite items */
    const showItems = isFav ? shows.filtered : shows.original;

    return {
        addToFav,
        showItems,
        isFav,
        setIsFav,
        setSearch,
        search,
        getShows
    }
}