import '../../sass/base.scss'
import Error from '../../components/Error/error';

function Error404() {
    return (
        <Error
            title="404"
            subtitle="Oups! La page que vous demandez n'existe pas."
        />
    )
}

export default Error404;
