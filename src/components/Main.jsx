import articleDB from "../articleDB";

function Main() {
    return (
        <main className=" container my-5">
            <div className="d-flex justify-content-center row">
                {
                    articleDB.map((ele) => {
                        return (
                            <div className="card myCard col-3 m-3" key={ele.id} >
                                <img className="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.title}</h5>
                                    <p className="card-text">{ele.author}</p>
                                    <button className="btn btn-primary mx-3">Go somewhere</button>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    );
}

export default Main;