const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

//creating dynamic add button
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  //adding alert for already existing days
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Day already registered 🔴")
    return
  }

  alert("Day registered successfully ✅")
  nlwSetup.addDay(today)
}

function save() {
  // localStorage value cannot be an object so we're using JSON.stringify to transform it into a string
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

// now the data cannot be display as string and we should return it back as object using JSON.parse
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()