const inputLuasField = document.getElementById('inputLuasField')
const countLuasButton = document.getElementById('countLuasButton')
const resetLuasButton = document.getElementById('resetLuasButton')
const hasilLuas = document.getElementById('hasilLuas')

countLuasButton.disabled = true

inputLuasField.addEventListener('input', function(){
      var inputValue = inputLuasField.value.trim()
      if(validateInteger(inputValue)){
            countLuasButton.disabled = false
      } else {
            countLuasButton.disabled = true
      }
})

countLuasButton.addEventListener('click', function() {
      const inputValue = parseInt(inputLuasField.value.trim(), 10)
      const luasPersegi = hitungLuasPersegi(inputValue)
      hasilLuas.textContent = luasPersegi
})

resetLuasButton.addEventListener('click', function(){
      inputLuasField.value = ''
      hasilLuas.textContent = ''
      countLuasButton.disabled = true

})


function validateInteger(input){
      const integerRegex = /^-?\d+$/
      if (integerRegex.test(input)){
            return true;
      } else {
            return false;
      }
}

function hitungLuasPersegi(sisi){
      return sisi * sisi
}