import { IconButton } from '@chakra-ui/react';

const SearchBar =()=>{
    return(
        <>
        <input type="text" /><IconButton aria-label='Search database' icon={<SearchBar />} />
        </>
    )
}
export default SearchBar;