// Code Keypad Component Here

function Keypad() {
    function handleChange(){
        console.log('Entering password...')
    }

    return (
        <input type='password' name='password' onChange={handleChange} >
        </input>
    )
}

export default Keypad