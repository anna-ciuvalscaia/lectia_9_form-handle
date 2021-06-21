const options = ["Political", "Economics", "IT", "Sciene", "Sport"]

const init = () => {
    let btn = document.querySelector('#btn-subscribe')
    btn.setAttribute('disabled', true)
   
   renderOptions(options) 

   let agreeCheckbox = document.querySelector('[name="terms"]') // css attribute selectors
  // let setInput = document.getElementById('options').getElementsByTagName('INPUT') ???
   let setInput = document.getElementById('options')
   agreeCheckbox.onchange = agreementCheckboxHandler
   setInput.onchange = agreementCheckboxHandler
}

const renderOptions = (options) => { 
     let optionsDiv = document.getElementById('options')

     options.forEach(option => {
        let input = document.createElement('input')
     input.setAttribute('type', 'checkbox')
     input.setAttribute('name', `option_${option.toLowerCase().replace("", "_")}`)
     
     let text = document.createTextNode(option)
     let br = document.createElement('br')
      optionsDiv.appendChild(input)
      optionsDiv.appendChild(text)
      optionsDiv.appendChild(br)
    })
     
}




const agreementCheckboxHandler = () => {
    let agreeCheckbox = document.querySelector('[name="terms"]')
    let btn = document.querySelector('#btn-subscribe')
   // console.dir(agreeCheckbox)

    let setInput = document.getElementById('options').getElementsByTagName('INPUT')
    let arrayInput = Array.from(setInput)
    //let select = arrayInput.checked 
    let schear = arrayInput.find( arrayInput => arrayInput.checked ) 
 
    if(agreeCheckbox.checked && schear){
        btn.removeAttribute('disabled')
        renderAgreementText("You've agreed to the terms and conditions!")
    } else {
        btn.setAttribute('disabled', true)
        renderAgreementText("You must agree with the terms and conditions !")
    }

}

// You must agree with the terms and conditions 
const renderAgreementText = (text) => {
    let agreeLabel = document.getElementById('terms')
    let textNode = document.createTextNode(text)
    agreeLabel.removeChild(agreeLabel.lastChild)
    agreeLabel.appendChild(textNode)
}

window.onload = init