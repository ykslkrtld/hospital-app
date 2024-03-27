const AddModal = () => {
  return (
    <div>
        <form action="">
            <label htmlFor="name">Patient Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="date"></label>
            <input type="date" name="date" id="date" />
            <button type="submit">Save</button>
            <button type="reset">Close</button>
        

        </form>
    </div>
  )
}

export default AddModal