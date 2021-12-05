// Code EyesOnMe Component Here

function EyesOnMe(){
    function focusHandle(){
        console.log('Good!')
    }

    function blurHandle(){
        console.log('Hey! Eyes on me!')
    }

    return (
        <button onFocus={focusHandle} onBlur={blurHandle}>Eyes on me </button>
   )
}

export default EyesOnMe