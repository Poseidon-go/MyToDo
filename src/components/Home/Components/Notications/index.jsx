const Notications = () => {
    const email = localStorage.getItem("email");
    return (
        <div id="dispayTodo" className="flex items-center text-[--main] mb-2 ">
            {/* <i className='bx bx-caret-right'></i> */}
            <span className="block text-[--main] text-[15px] break-words overflow-auto">{email}</span>
        </div>
    );
};

export default Notications;