export const Card = ({datos}) => {
    return(
        <div className="resultado">
            <div>
            {datos.name}
            </div>
            <div>
            {datos.lastname}
            </div>
        </div>
    );
}