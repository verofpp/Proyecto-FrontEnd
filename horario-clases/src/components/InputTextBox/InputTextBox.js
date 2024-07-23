import './InputTextBox.css';


const InputTextBox = (props) => {
    return (
        <div className='box-container'>
            <label className='box-label'>{ props.etiqueta }</label>
            <div className='box-input-container'>
                <textarea
                    className='box-input'
                    name={ props.name }
                    value={ props.value }
                    onChange={(e) => props.onChange(e.target.value)}
                ></textarea>
            </div>
        </div>
    );
}

export default InputTextBox;
