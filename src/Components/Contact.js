const Contact=()=>{
    return (
        <div>
        <div>
            <h1 className="font-bold p-2 m-2 text-2xl">This is Contact</h1>
        </div>
        <div>
            <input placeholder="name" className="border border-black m-2 p-2 "/>
            <input placeholder="text" className="border border-black m-2 p-2"/>
            <button className="border border-black bg-gray-200 m-2 p-2">Submit</button>
        </div>
        </div>
    );
}

export default Contact;