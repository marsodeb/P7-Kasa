import '../../sass/base.scss'
import Error from '../../components/Error/error';

function Error404() {

    document.title = 'Kasa - 404'

    const subtitle = (
        <>
            Oups! La page que <br /> vous demandez n'existe pas.
        </>
    );

    return (
        <Error
            title="404"
            subtitle={subtitle}
        />
    )
}

export default Error404;
