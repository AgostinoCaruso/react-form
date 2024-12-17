import { useState } from "react";
import articleDB from "../articleDB";




function Form() {

    let numID = articleDB.reduce((maxID, ele) => Math.max(maxID, ele.id), 0);
    numID++;

    const initialArticle = {
        id: numID,
        title: "",
        status: false,
        author: "",
    };
    const [article, setArticle] = useState(initialArticle);
    const [articleList, setArticleList] = useState([articleDB]);

    function handleInput(e) {
        e.preventDefault();

        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setArticle({ ...article, [e.target.name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        setArticleList([...articleList, article]);
        setArticle(initialArticle);
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* TITLE */}
                    <label htmlFor="inputTitolo">Titolo</label>
                    <input
                        type="name"
                        className="form-control"
                        id="inputTitolo"
                        placeholder="Inserisci titolo"
                        value={article.title}
                        onChange={handleInput}
                        name="title"
                    />
                    {/* AUTHOR */}
                    <label htmlFor="inputAutore">Autore</label>
                    <input
                        type="name"
                        className="form-control"
                        id="inputAutore"
                        placeholder="Inserisci autore"
                        value={article.author}
                        onChange={handleInput}
                        name="author"
                    />
                    {/* CHECKBOX */}
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="articleStatus"
                            name="status"
                            onChange={handleInput}
                        />
                        <label className="form-check-label" htmlFor="articleStatus">Check me out</label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary my-3"
                >Submit</button>
            </form>
        </div>

    );
}

export default Form;