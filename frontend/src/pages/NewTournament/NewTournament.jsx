import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
/* import TournamentCard from '../../components/TournamentCard/tournamentCard' */
import { newTournament } from '../../service/newTournament'

const NewTournament = () => {
  const [imagePreview, setImagePreview] = useState('')

  const [name, setName] = useState('')
  const [format, setFormat] = useState('')
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')

  const handleNewTournament = async () => {
    let data = {
      name: name,
      format: format,
      image: image,
      date: date,
    }

    console.log(data);
    const newTournamentResult = await newTournament(data)
  }

  const navigate = useNavigate()

  const redirectUser = () => {
    navigate('/Home')//Mandar ruta a tournamentpage
  }

  const sendButton = (e) => {
    e.preventDefault();
    handleNewTournament();
    /* redirectUser(); */
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          sendButton(e)
        }}
        action=""
      >
        <div>
          <label htmlFor="name">*Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            type="text"
            placeholder="Type a name"
            required
          />
          <br />
        </div>

        <div>
          <label htmlFor="format">*Select a format:</label>
          <select
            name="format"
            id="format"
            onChange={(e) => {
              setFormat(e.target.value)
            }}
            required
          >
            <option value="">Select a format</option>
            <option value="SB">Single Battle</option>
            <option value="DB">Double Battles</option>
            <option value="MS">Monotype Singles</option>
            <option value="MD">Monotype Doubles</option>
            <option value="RL">Restricted legendaries</option>
            <option value="EG">Everything goes</option>
          </select>
          <br />
        </div>

        <div>
          <label htmlFor="format">*Select a thumbnail:</label>
          <select
            value={imagePreview}
            name="format"
            id="format"
            onChange={(e) => {
              setImagePreview(e.target.value), //Pasa la imagen por props al componente
                setImage(e.target.value) //Lo almacena en la base de datos
            }}
            required
          >
            <option value="">Select an image</option>
            <option value="img1.jpg">img1</option>
            <option value="img2.jpg">img2</option>
            <option value="img3.jpg">img3</option>
            <option value="img4.jpg">img4</option>
            <option value="img5.jpg">img5</option>
            <option value="img6.jpg">img6</option>
            <option value="img7.jpg">img7</option>
            <option value="img8.jpg">img8</option>
            <option value="img9.jpg">img9</option>
            <option value="img10.jpg">img10</option>
          </select>
          <br />
        </div>

        <div>
          <label htmlFor="date">*Date:</label>
          <input
            type="date"
            onChange={(e) => {
              setDate(e.target.value)
            }}
            required
          />
        </div>

        <div>
          <button>Create Tournament</button>
        </div>
      </form>
      Añadir la cosa
    </div>
  )
}

export default NewTournament
