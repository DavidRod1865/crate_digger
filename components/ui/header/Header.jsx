import Button from '../buttons/Button';
import SearchBar from '../search/SearchBar';

function Header(){
    return (
        <header className='flex flex-col bg-transparent px-8 pt-4'>
            <div className='flex items-center justify-center'>
            <div className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#18D860] relative sm:inline-block p-1 mr-8'>
                <h1 className='relative text-black font-bold text-lg'>
                  Crate Digger
                </h1>
            </div>
            <Button href="/" text="Home" />
            </div>
            <SearchBar />
        </header>
    )
}

export default Header