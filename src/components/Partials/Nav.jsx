import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../../StateHandlers/actions'
import { useGetLanguages } from '../../DBHandlers/Language.jsx'

export default function Nav({ language }) {
    useGetLanguages()
    const languages = useSelector(state => state.languages)
    const pages = useSelector(state => state.pages)
    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="d-flex flex-grow-1">
                <Link to={`/`} className="navbar-brand" alt="Brand logo">
                    Honk
                    </Link>
                <div className="w-100 text-right">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                <ul className="navbar-nav ml-auto flex-nowrap">
                    {pages && Object.keys(pages).length > 0
                        ? pages.map(page => {
                            if (page.component !== "Home" && page.order !== -1) {
                                return (<li key={page.id} className="nav-item">
                                    <Link to={page.url} className="nav-link m-2 menu-item nav-active">{page.title}</Link>
                                </li>)
                            }
                            return null
                        }) : null}
                </ul>
            </div>

            <div className="btn-group">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {language}
                </button>
                <div className="dropdown-menu">
                    {languages.map(lang => <button key={lang.id} value={lang.language} className="dropdown-item" onClick={(e) => dispatch(setLanguage(e.target.value))}>{lang.language}</button>)}
                </div>
            </div>

        </nav>
    )
}
