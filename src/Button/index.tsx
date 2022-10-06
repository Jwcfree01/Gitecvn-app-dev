const Button = () => {
  // logic
  const handleClick = () => {
    console.log('click')
  }

  const handleClickButton = (status: boolean) => {
    if (status) {
      console.log('true')
    } else {
      console.log('false')
    }
  }

  // ui
  return (
    <div>
      <h2>Son</h2>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Button
