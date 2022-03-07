import User from "../types/User"

export default function validateForm(
  e: any,
  user: User, 
  setError: Function,
  setName: Function, 
  setEmail: Function,
  setCpf: Function,
  setPhone: Function) {

  if (e.target.name === 'name') {
    if (user.name.length < 2) {
      setError({ type: 'name', text: 'Este campo deve conter 3 ou mais caracteres' })
      setName(false)
      return
    }
    setError({ type: '', text: '' })
    setName(true)
  }
  if (e.target.name === 'email') {
    if (user.email.includes("@") === false) {
      setError({ type: 'email', text: 'Digite um email válido' })
      setEmail(false)
      return
    }
    setError({ type: '', text: '' })
    setEmail(true)
  }

  if (e.target.name === 'cpf') {
    if (user.cpf.length < 10 || !parseInt(user.cpf)) {
      setError({ type: 'cpf', text: 'Digite um cpf válido' })
      setCpf(false)
      return
    }
    setError({ type: '', text: '' })
    setCpf(true)
  }

  if (e.target.name === 'phone') {
    if (user.phone.length < 9 ||  !parseInt(user.phone)) {
      setError({ type: 'phone', text: 'Digite um telefone válido' })
      setPhone(false)
      return
    }
    setError({ type: '', text: '' })
    setPhone(true)
  }
}
