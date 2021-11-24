function Signup() {
  return (
    <form onSubmit={() => alert('Submitting!')}>
      <input />
      <button onClick={e => e.preventDefault()}>Send</button>
    </form>
  );
}

export default Signup;