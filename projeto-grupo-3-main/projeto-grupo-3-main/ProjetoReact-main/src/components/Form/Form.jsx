import React from 'react'
import style from './Form.module.css'
import contato from './../../assets/images/contato.jpg'

function Form() {
  return (
    <main className={`${style.gridInterno} content`}>
      <h1 className={style.titulo}>Contatos</h1>
      <img src={contato} className={style.col2img} alt="Typewriter"></img>
      <form className={style.form}>
        <label>Nome</label>
        <input className={style.meuInput}/>
        <label>Email</label>
        <input className={style.meuInput} />
        <label>Telefone</label>
        <input className={style.meuInput} />
        <button className={style.meuBotao}>Enviar</button>
      </form>
    </main>
  )
}

export default Form;