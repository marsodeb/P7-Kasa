import './loading.scss';

function Loading() {
    return (
        <div className='loader'>
            <span className='loader-txt'>Chargement en cours ... <span className='loader-emoji'>⌛</span></span>
        </div>
    )
}

export default Loading;