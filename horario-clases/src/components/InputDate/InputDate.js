import './InputDate.css';

const InputDate = (props) => {

    return (
        <div className='input-container'>
            <label className='input-label'>{ props.etiqueta }</label>
            <div className='date-container'>
                <input
                    className='input-date'
                    type="date"
                    name={ props.name }
                    value={ props.value }
                    onChange={(e) => props.onChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default InputDate;
