const $app = document.getElementById('app')
const { useState } = React

const Avatar = ({ id, name = 'newUser', size }) => {
  const [enabled, setEnabled] = useState(true)

  if (!id) return <img src="https://randomuser.me/api/portraits/lego/8.jpg" />

  const src = `https://randomuser.me/api/portraits/women/${id}.jpg`

  let pictureClassName = ''
  if (size === 'small') pictureClassName = 'is-small'
  else if (size === 'large') pictureClassName = 'is-large'

  const imgClassName = enabled ? '' : 'disabled'

  return (
    <picture className={pictureClassName}>
      <img
        onClick={() => setEnabled(!enabled)}
        className={imgClassName}
        src={src}
      />
      <strong>{name}</strong>
    </picture>
  )
}

const Contador = () => {
  const [contadorValue, actualizarContador] = useState(0)
  const [numeroDeVeces, actualizarVeces] = useState(0)

  return (
    <div>
      <span>{contadorValue}</span>
      <button
        onClick={() => {
          actualizarContador(contadorValue + 1)
          actualizarVeces(numeroDeVeces + 1)
        }}
      >
        + Incrementar
      </button>
      <button
        onClick={() => {
          actualizarContador(contadorValue - 1)
          actualizarVeces(numeroDeVeces + 1)
        }}
      >
        - Decrementar
      </button>
      <p>Numero de veces utilizado: {numeroDeVeces}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <Contador />

    {/* <Avatar id={10} name="Ana" size="small" />
    <Avatar id={20} name="Andy" />
    <Avatar id={30} name="Alba" size="large" />
    <Avatar id={13} size="large" />
    <Avatar /> */}
  </div>,
  $app
)

// const Avatar = (params) => {
//   const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`

//   return `
//     <picture>
//         <img src="${src}" alt="photo of a woman" class="src">
//         <em>${params.name}</em>
//     </picture>
//     `
// }

// $app.innerHTML += Avatar({ id: 5, name: 'Andrea' })
// $app.innerHTML += Avatar({ id: 6, name: 'Manuela' })

// $app.querySelectorAll('img').forEach((img) => {
//   img.addEventListener('click', () => {
//     img.classList.toggle('disabled')
//   })
// })
