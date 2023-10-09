import './Component.css';

function BodyContentComponent(props) {
    return(
        <div className="BodyContent">
            <h4>I am a Body with data from parent: {props.text}</h4>
        </div>
    );
}

export default BodyContentComponent;