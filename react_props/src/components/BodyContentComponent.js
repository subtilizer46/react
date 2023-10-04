import './Body.css';

function BodyContentComponent(props) {
    return(
        <div className="BodyContent">
            {/* Print the prop content below */}
            <h4>{props.text1}</h4>
            <h4>{props.text2}</h4>
        </div>
    );
}

export default BodyContentComponent;