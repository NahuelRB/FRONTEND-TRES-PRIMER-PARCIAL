export const Card = ({datos}) => {
    return(
        <div className="resultado">
            {datos.name}
            {datos.lastname}
        </div>
    );
}